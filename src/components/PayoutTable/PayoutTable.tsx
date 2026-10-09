import "./PayoutTable.css";
import { payouts } from "../../logic/payouts.ts";

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
