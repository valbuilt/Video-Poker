import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Player, PlayingCard, HeldCard } from "../types.ts";
import { createDeck, shuffleDeck, dealHand } from "../logic/deck.ts";

type GameState = {
  players: Player[];
  currentPlayer: Player | null;
  deck: PlayingCard[];
  hand: HeldCard[];
  discarded: PlayingCard[];
  handEvaluated: boolean;
  addPlayer: (name: string) => void;
  selectPlayer: (player: Player) => void;
  updateCoins: (amount: number) => void;
  dealNewHand: () => void;
  toggleHold: (index: number) => void;
  draw: () => void;
  bet: number;
  increaseBet: () => void;
  decreaseBet: () => void;
};

/* persist is Zustand's middleware => saves the whole store's data in localStorage not just one variable */
export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      players: [],
      currentPlayer: null,
      deck: [],
      hand: [],
      handEvaluated: false,
      discarded: [],
      bet: 1,

      /**
       * Adds a new player with 100 starting coins to the players list.
       * @param name - the new player's name
       * @returns nothing
       */
      addPlayer: (name) =>
        set((state) => ({
          players: [...state.players, { name: name, coins: 100 }],
        })),

      /**
       * Sets which player is currently playing.
       * @param player - the player that was picked
       * @returns nothing
       */
      selectPlayer: (player) => set({ currentPlayer: player }),

      /**
       * Changes the current player's coins by the given amount (negative number for a bet, positive for a win).
       * Updates both currentPlayer and that player's entry in the players list so they stay in sync. Does nothing if no player is selected.
       * @param amount - how much to add (or subtract) from the coins
       * @returns nothing
       */
      updateCoins: (amount) =>
        set((state) => {
          if (!state.currentPlayer) {
            return state;
          }

          const updatedPlayer: Player = {
            ...state.currentPlayer,
            coins: state.currentPlayer.coins + amount,
          };

          return {
            currentPlayer: updatedPlayer,
            players: state.players.map((player) =>
              player.name === updatedPlayer.name ? updatedPlayer : player,
            ),
          };
        }),

      /**
       * Builds a fresh deck, shuffles it and deals 5 cards as the player's new hand.
       * Clears the discard pile and resets handEvaluated so the result isn't shown before the next draw.
       * @returns nothing
       */
      dealNewHand: () =>
        set(() => {
          const freshDeck = shuffleDeck(createDeck());
          const { hand, remainingDeck } = dealHand(freshDeck);
          const handWithHoldMark: HeldCard[] = hand.map((card) => ({
            ...card,
            held: false,
          }));

          return {
            deck: remainingDeck,
            hand: handWithHoldMark,
            discarded: [],
            handEvaluated: false,
          };
        }),

      /**
       * Flips the held status of one card in the hand, by its position.
       * @param index - which card in the hand to toggle
       * @returns nothing
       */
      toggleHold: (index) =>
        set((state) => ({
          hand: state.hand.map((card, position) =>
            position === index ? { ...card, held: !card.held } : card,
          ),
        })),

      /**
       * Replaces every non-held card in the hand with a new card from the deck, moving the replaced cards to the discard pile.
       * Marks the hand as evaluated so the result can be displayed after the draw.
       * @returns nothing
       */
      draw: () =>
        set((state) => {
          const keptCards = state.hand.filter((card) => card.held);
          const discardedCards = state.hand.filter((card) => !card.held);
          const numberToReplace = discardedCards.length;

          const newCards = state.deck.slice(0, numberToReplace);
          const remainingDeck = state.deck.slice(numberToReplace);

          const newHand: HeldCard[] = [
            ...keptCards,
            ...newCards.map((card) => ({ ...card, held: false })),
          ];

          return {
            hand: newHand,
            deck: remainingDeck,
            discarded: [...state.discarded, ...discardedCards],
            handEvaluated: true,
          };
        }),

      /**
       * Raises the bet by 1 coin. Does nothing if the bet is already 5, since that's the max.
       * @returns nothing
       */

      increaseBet: () =>
        set((state) => {
          if (state.bet >= 5) {
            return state;
          }
          return { bet: state.bet + 1 };
        }),

      /**
       * Lowers the bet by 1 coin. Does nothing if the bet is already 1, since that's the min.
       * @returns nothing
       */
      decreaseBet: () =>
        set((state) => {
          if (state.bet <= 1) {
            return state;
          }
          return { bet: state.bet - 1 };
        }),
    }),
    { name: "video-poker-storage" },
  ),
);
