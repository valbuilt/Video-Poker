import "./App.css";
import Card from "./components/Card/Card";
import TotalCoins from "./components/TotalCoins/TotalCoins";
import CurrentBet from "./components/CurrentBet/CurrentBet";
import PayoutTable from "./components/PayoutTable/PayoutTable";
import PlayerSelect from "./components/PlayerSelect/PlayerSelect";

/* Card is the component name, card is the property*/
export default function App() {
  return (
    <main>
      <div className="hand">
        <PayoutTable />

        <div className="hand">
          <Card card={{ suit: "hearts", rank: "A" }} />
          <Card card={{ suit: "spades", rank: "K" }} faceDown />
          <Card card={{ suit: "clubs", rank: "10" }} />
          <Card card={{ suit: "diamonds", rank: "3" }} />
          <Card card={{ suit: "clubs", rank: "5" }} />
        </div>

        <div className="bet-area">
          <TotalCoins coins={100} />
          <CurrentBet bet={5} />
          <PlayerSelect />
        </div>
      </div>
    </main>
  );
}
