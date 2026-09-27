import Card from "../../components/Card/Card";
import TotalCoins from "../../components/TotalCoins/TotalCoins";
import CurrentBet from "../../components/CurrentBet/CurrentBet";

/**
 * The main game screen. Still work in progress. Real deck and hand logic comes later.
 * @returns a placeholder game layout
 */
export default function GamePage() {
  return (
    <div className="hand">
      <Card card={{ suit: "hearts", rank: "A" }} />
      <Card card={{ suit: "spades", rank: "K" }} faceDown />
      <Card card={{ suit: "diamonds", rank: "2" }} />
      <Card card={{ suit: "spades", rank: "5" }} />
      <Card card={{ suit: "clubs", rank: "10" }} />
      <TotalCoins coins={100} />
      <CurrentBet bet={5} />
    </div>
  );
}
