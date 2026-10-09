import type { PokerHand } from "../../types";

type CurrentHandProps = {
  pokerHand: PokerHand;
};

/**
 * Shows which poker hand the player has right now, like Pair or Full House.
 * @param pokerHand - the name of the hand
 * @returns a text line with the name of the hand
 */
export default function CurrentHand({ pokerHand }: CurrentHandProps) {
  return <p className="current-hand">{pokerHand}</p>;
}
