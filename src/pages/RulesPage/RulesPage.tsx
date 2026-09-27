import PayoutTable from "../../components/PayoutTable/PayoutTable.tsx";
import Card from "../../components/Card/Card.tsx";
import "./RulesPage.css";

/**
 * Explains the game's rules and shows the payout table.
 * @returns the rules text and payout table
 */
export default function RulesPage() {
  return (
    <section className="rules">
      <h2>How to Play Video Poker</h2>
      <p>
        The goal is simple: build the best five-card poker hand you can and win
        coins!
      </p>
      <ol>
        <li>
          <strong>Place your bet.</strong> Choose how many coins you want to
          play.
        </li>
        <li>
          <strong>Deal.</strong> You'll receive five cards.
        </li>
        <li>
          <strong>Hold or discard.</strong> Keep the cards you like and discard
          the rest. New cards will be dealt to replace them.
        </li>
        <li>
          <strong>Check your hand.</strong> Your final five cards determine
          whether you win and how many coins you earn.
        </li>
      </ol>
      <p>
        From Jacks or Better all the way up to a Royal Flush, every winning hand
        has its own payout.
        <p>The more coins you bet, the higher your potential payout.</p>
      </p>
      <p>
        <strong>Ready to test your luck? Deal your hand!</strong>
      </p>
      <div className="rules-layout">
        <PayoutTable />
        <div className="rules-cards">
          <Card card={{ suit: "hearts", rank: "A" }} />
          <Card card={{ suit: "spades", rank: "K" }} faceDown />
        </div>
      </div>
      ;
    </section>
  );
}
