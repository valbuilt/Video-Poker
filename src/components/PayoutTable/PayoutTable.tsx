import type { Payout } from "../../types.ts";
import "./PayoutTable.css";

const payouts: Payout[] = [
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
 * Displays a table showing the different poker hands and how much each hand pays for bets from one to five coins.
 *
 * The payout values are already defined in this file, so the component does not need any props.
 * @returns A table containing poker hand names and their corresponding payouts for each bet amount.
 */

export default function PayoutTable() {
  return (
    <table className="payout-table">
      <thead>
        <tr>
          <th>Hand</th>
          <th>1 coin</th>
          <th>2 coins</th>
          <th>3 coins</th>
          <th>4 coins</th>
          <th>5 coins</th>
        </tr>
      </thead>
      <tbody>
        {payouts.map((payoutRow) => (
          <tr key={payoutRow.hand}>
            <td>{payoutRow.hand}</td>
            {payoutRow.payoutByBet.map((payout, index) => (
              <td key={index}>{payout}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
