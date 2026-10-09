import type { PokerHand, PlayingCard } from "../types.ts";

const rankToNumber = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

/**
 * Counts how many cards there are of each rank and gives back just the counts, biggest first.
 * For example K K 7 7 3 gives [2, 2, 1].
 * @param hand - the cards to count
 * @returns the counts for each rank, biggest first
 */

function getRankCounts(hand: PlayingCard[]): number[] {
  const countsByRank: Record<string, number> = {};

  for (const card of hand) {
    if (countsByRank[card.rank]) {
      countsByRank[card.rank] = countsByRank[card.rank] + 1;
    } else {
      countsByRank[card.rank] = 1;
    }
  }

  return Object.values(countsByRank).sort((first, second) => second - first);
}

/**
 * Turns the ranks of the cards into numbers, smallest first.
 * @param hand - the cards to turn into numbers
 * @returns the rank numbers, smallest first
 */
function getSortedRankNumbers(hand: PlayingCard[]): number[] {
  return hand
    .map((card) => rankToNumber[card.rank])
    .sort((first, second) => first - second);
}

/**
 * Checks if all the cards have the same suit.
 * @param hand - the cards to check
 * @returns true if it's a flush
 */
function isFlush(hand: PlayingCard[]): boolean {
  const firstSuit = hand[0].suit;
  const cardsWithFirstSuit = hand.filter((card) => card.suit === firstSuit);
  return cardsWithFirstSuit.length === hand.length;
}

/**
 * Checks if the cards make a straight, like 5 6 7 8 9. It's a straight
 * when all five ranks are different and the highest number is exactly
 * 4 more than the lowest. The ace can also be low, so A 2 3 4 5 counts.
 * @param rankCounts - how many cards there are of each rank, biggest first
 * @param sortedRankNumbers - the rank numbers, smallest first
 * @returns true if it's a straight
 */
function isStraight(
  rankCounts: number[],
  sortedRankNumbers: number[],
): boolean {
  const allRanksDifferent = rankCounts[0] === 1;
  const lowest = sortedRankNumbers[0];
  const highest = sortedRankNumbers[4];

  const isNormalStraight = allRanksDifferent && highest - lowest === 4;

  // A 2 3 4 5 sorts as 2 3 4 5 14, so it needs its own check
  const isAceLowStraight =
    allRanksDifferent && sortedRankNumbers[3] === 5 && highest === 14;

  return isNormalStraight || isAceLowStraight;
}

/**
 * Checks whether the hand contains a pair of Jacks, Queens, Kings or Aces, since only these pairs can win.
 * @param hand - the cards to check
 * @returns true if the hand contains a qualifying pair
 */
function hasJacksOrBetterPair(hand: PlayingCard[]): boolean {
  const highRanks = ["J", "Q", "K", "A"];

  return highRanks.some(
    (rank) => hand.filter((card) => card.rank === rank).length === 2,
  );
}

/**
 * Works out which poker hand the cards make. Checks from the best
 * hand down to the worst and returns the first one that fits.
 * @param hand - the five cards to check
 * @returns the name of the hand
 */
export function evaluateHand(hand: PlayingCard[]): PokerHand {
  const rankCounts = getRankCounts(hand);
  const sortedRankNumbers = getSortedRankNumbers(hand);
  const hasFlush = isFlush(hand);
  const hasStraight = isStraight(rankCounts, sortedRankNumbers);
  const startsAtTen = sortedRankNumbers[0] === 10;

  if (hasStraight && hasFlush && startsAtTen) {
    return "Royal Flush";
  }
  if (hasStraight && hasFlush) {
    return "Straight Flush";
  }
  if (rankCounts[0] === 4) {
    return "Four of a Kind";
  }
  if (rankCounts[0] === 3 && rankCounts[1] === 2) {
    return "Full House";
  }
  if (hasFlush) {
    return "Flush";
  }
  if (hasStraight) {
    return "Straight";
  }
  if (rankCounts[0] === 3) {
    return "Three of a Kind";
  }
  if (rankCounts[0] === 2 && rankCounts[1] === 2) {
    return "Two Pair";
  }
  if (rankCounts[0] === 2 && hasJacksOrBetterPair(hand)) {
    return "Jacks or Better";
  }
  if (rankCounts[0] === 2) {
    return "Pair";
  }

  return "High Card";
}
