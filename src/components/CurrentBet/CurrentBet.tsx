type CurrentBetProps = {
  bet: number;
};

/**
 * Displays the player's current bet amount for this round.
 * @param bet - the number of coins currently staked
 * @returns text showing the current bet
 */
export default function CurrentBet({ bet }: CurrentBetProps) {
  return <p className="current-bet"> Bet: {bet}</p>;
}
