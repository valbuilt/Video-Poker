import { create } from "zustand";
import type { Player, PlayingCard } from "../types.ts";
import { createDeck, shuffleDeck, dealHand } from "../logic/deck.ts";

type GameState = {
  players: Player[];
  currentPlayer: Player | null;
  deck: PlayingCard[];
  hand: PlayingCard[];
  discarded: PlayingCard[];
  addPlayer: (name: string) => void;
  selectPlayer: (player: Player) => void;
  updateCoins: (amount: number) => void;
  dealNewHand: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  players: [],
  currentPlayer: null,
  deck: [],
  hand: [],
  discarded: [],

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
   * Clears out any previous discard pile.
   * @returns nothing
   */
  dealNewHand: () =>
    set(() => {
      const freshDeck = shuffleDeck(createDeck());
      const { hand, remainingDeck } = dealHand(freshDeck);
      return { deck: remainingDeck, hand, discarded: [] };
    }),
}));
