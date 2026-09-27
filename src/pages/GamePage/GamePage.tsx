import Card from "../../components/Card/Card.tsx";
import TotalCoins from "../../components/TotalCoins/TotalCoins.tsx";
import CurrentBet from "../../components/CurrentBet/CurrentBet.tsx";
import { useGameStore } from "../../store/gameStore.ts";

/**
 * The main game screen. Shows a Deal button and the player's current hand from the store.
 * @returns the deal button and the hand of cards
 */

export default function GamePage() {
  const hand = useGameStore((state) => state.hand);
  const dealNewHand = useGameStore((state) => state.dealNewHand);

  return (
    <div>
      <button onClick={dealNewHand}>Deal</button>
      <div className="hand">
        {hand.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
