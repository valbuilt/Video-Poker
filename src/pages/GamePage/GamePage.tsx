import Card from "../../components/Card/Card.tsx";
import PayoutTable from "../../components/PayoutTable/PayoutTable.tsx";
import { useGameStore } from "../../store/gameStore.ts";
import "./GamePage.css";

/**
 * The main game screen. Shows a Deal button and the player's current hand
 * (click a card to hold it), and a Draw button to replace the rest.
 * @returns the deal/draw buttons and the hand of cards
 */

export default function GamePage() {
  const hand = useGameStore((state) => state.hand);
  const dealNewHand = useGameStore((state) => state.dealNewHand);
  const toggleHold = useGameStore((state) => state.toggleHold);
  const draw = useGameStore((state) => state.draw);

  return (
    <div className="game-page">
      <PayoutTable />

      <div className="game-controls">
        <div className="hand">
          {hand.length === 0 ? (
            <>
              <Card faceDown card={{ suit: "hearts", rank: "A" }} />
              <Card faceDown card={{ suit: "hearts", rank: "A" }} />
              <Card faceDown card={{ suit: "hearts", rank: "A" }} />
              <Card faceDown card={{ suit: "hearts", rank: "A" }} />
              <Card faceDown card={{ suit: "hearts", rank: "A" }} />
            </>
          ) : (
            hand.map((card, index) => (
              <button
                key={index}
                className="card-wrapper"
                onClick={() => toggleHold(index)}
              >
                <Card card={card} />
                {card.held && <p className="hold-label">Hold</p>}
              </button>
            ))
          )}
        </div>

        <div className="buttons">
          <button onClick={dealNewHand}>Deal</button>
          <button onClick={draw}>Draw</button>
        </div>
      </div>
    </div>
  );
}
