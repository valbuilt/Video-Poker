import "./App.css";
import Card from "./components/Card/Card";

/* Card is the component name, card is the property*/
export default function App() {
  return (
    <main>
      <Card card={{ suit: "hearts", rank: "A" }} />
      <Card card={{ suit: "spades", rank: "K" }} faceDown />
    </main>
  );
}
