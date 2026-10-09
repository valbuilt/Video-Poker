import type { Payout, PokerHand } from "../types.ts";

export const payouts: Payout[] = [
  { hand: "Royal Flush", payoutByBet: [250, 500, 750, 1000, 4000] },
  { hand: "Straight Flush", payoutByBet: [50, 100, 150, 200, 250] },
  { hand: "Four of a Kind", payoutByBet: [25, 50, 75, 100, 125] },
  { hand: "Full House", payoutByBet: [9, 18, 27, 36, 45] },
  { hand: "Flush", payoutByBet: [6, 12, 18, 24, 30] },
  { hand: "Straight", payoutByBet: [4, 8, 12, 16, 20] },
  { hand: "Three of a Kind", payoutByBet: [3, 6, 9, 12, 15] },
  { hand: "Two Pair", payoutByBet: [2, 4, 6, 8, 10] },
  { hand: "Jacks or Better", payoutByBet: [1, 2, 3, 4, 5] },
];

/**
 * Looks up how many coins a hand pays out for a given bet.
 * Hands that aren't in the payout table, like Pair or High Card, pay 0.
 * @param pokerHand - the name of the hand
 * @param bet - how many coins were bet, 1 to 5
 * @returns the number of coins won
 */
export function getPayout(pokerHand: PokerHand, bet: number): number {
  const payoutRow = payouts.find((row) => row.hand === pokerHand);

  if (!payoutRow) {
    return 0;
  }

  return payoutRow.payoutByBet[bet - 1];
}
