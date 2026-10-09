import Card from "../../components/Card/Card.tsx";
import PayoutTable from "../../components/PayoutTable/PayoutTable.tsx";
import { useGameStore } from "../../store/gameStore.ts";
import TotalCoins from "../../components/TotalCoins/TotalCoins.tsx";
import CurrentBet from "../../components/CurrentBet/CurrentBet.tsx";
import CurrentHand from "../CurrentHand/CurrentHand.tsx";
import { evaluateHand } from "../../logic/evaluateHand.ts";
import "./Game.css";

/**
 * The whole game board. Gathers the payout table, the hand, the bet and the deal/draw buttons in one place.
 * @returns the full game board
 */

export default function Game() {
  const hand = useGameStore((state) => state.hand);
  const handEvaluated = useGameStore((state) => state.handEvaluated);
  const dealNewHand = useGameStore((state) => state.dealNewHand);
  const toggleHold = useGameStore((state) => state.toggleHold);
  const draw = useGameStore((state) => state.draw);
  const bet = useGameStore((state) => state.bet);
  const increaseBet = useGameStore((state) => state.increaseBet);
  const decreaseBet = useGameStore((state) => state.decreaseBet);
  const currentPlayer = useGameStore((state) => state.currentPlayer);
  const pokerHand =
    handEvaluated && hand.length === 5 ? evaluateHand(hand) : null;
  const isWinningHand =
    pokerHand !== null && pokerHand !== "High Card" && pokerHand !== "Pair";

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

        {isWinningHand && pokerHand && <CurrentHand pokerHand={pokerHand} />}

        <div className="bet-area">
          {currentPlayer && <TotalCoins coins={currentPlayer.coins} />}
          <CurrentBet bet={bet} />
          <div className="bet-buttons">
            <button onClick={increaseBet}>Increase Bet</button>
            <button onClick={decreaseBet}>Decrease Bet</button>
          </div>
        </div>

        <div className="buttons">
          <button onClick={dealNewHand}>Deal</button>
          <button onClick={draw}>Draw</button>
        </div>
      </div>
    </div>
  );
}
