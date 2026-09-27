import type { PlayingCard } from "../../types.ts";
import "./Card.css";

type CardProps = {
  card: PlayingCard;
  faceDown?: boolean;
  onClick?: () => void;
};

/**
 * Renders a single playing card.
 * @param card - the suit and rank of the card to display
 * @param faceDown - whether to show the card's back instead of its face (the default: false)
 * @param onClick - optional function to run when the card is clicked
 * @returns a styled card element, showing its rank and suit symbol (colour red or black depending on suit) or its back, depending on faceDown
 */

export default function Card({ card, faceDown = false, onClick }: CardProps) {
  const isRed = card.suit === "hearts" || card.suit === "diamonds";

  return (
    <div className={faceDown ? "card card-back" : "card"} onClick={onClick}>
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
