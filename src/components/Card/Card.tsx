//problem: face up and down of 52 different cards. Use the least code to produce all diff. results

import type { PlayingCard } from "../../types";
import "./Card.css";

type CardProps = {
  card: PlayingCard;
  faceDown?: boolean; // Valgfrie props. ? permits omission so that I don't always have to spell it out explicitly
};

// If faceDown wasn't provided, use false instead.
export default function Card({ card, faceDown = false }: CardProps) {
  const isRed = card.suit === "hearts" || card.suit === "diamonds";

  return (
    <div className={faceDown ? "card card-back" : "card"}>
      {!faceDown && (
        <>
          <span className={isRed ? "card-rank card-red" : "card-rank"}>
            {card.rank}
          </span>
          <span className={isRed ? "card-suit card-red" : "card-suit"}>
            {card.suit === "hearts"
              ? "♥"
              : card.suit === "diamonds"
                ? "♦"
                : card.suit === "clubs"
                  ? "♣"
                  : "♠"}
          </span>
        </>
      )}
    </div>
  );
}
