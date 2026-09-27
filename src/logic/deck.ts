import type { PlayingCard } from "../types.ts";

const suits: PlayingCard["suit"][] = ["hearts", "diamonds", "clubs", "spades"];
const ranks: PlayingCard["rank"][] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

/**
 * Builds an ordered 52-card deck, one card for every combo of suit and rank.
 * @returns an array of all 52 playing cards
 */
export function createDeck(): PlayingCard[] {
  const deck: PlayingCard[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }

  return deck;
}

/**
 * Shuffles a deck into random order by giving each card a random number and sorting by that number.
 * @param deck - the deck to shuffle
 * @returns a new array containing the same cards, now in random order
 */
export function shuffleDeck(deck: PlayingCard[]): PlayingCard[] {
  const shuffled = [...deck];

  shuffled.sort(() => Math.random() - 0.5);

  return shuffled;
}

/**
 * Deals the top 5 cards off a deck.
 * @param deck - the deck to deal from
 * @returns an object with the dealt hand and the remaining deck
 */
export function dealHand(deck: PlayingCard[]): {
  hand: PlayingCard[];
  remainingDeck: PlayingCard[];
} {
  const hand = deck.slice(0, 5);
  const remainingDeck = deck.slice(5);

  return { hand, remainingDeck };
}
