import "./App.css";
import Card from "./components/Card/Card";

/* Card is the component name, card is the property*/
export default function App() {
  return (
    <main>
      <div className="hand">
        <Card card={{ suit: "hearts", rank: "A" }} />
        <Card card={{ suit: "spades", rank: "K" }} faceDown />
        <Card card={{ suit: "clubs", rank: "10" }} />
        <Card card={{ suit: "diamonds", rank: "3" }} />
      </div>
    </main>
  );
}
