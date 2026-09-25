type TotalCoinsProps = {
  coins: number;
};

/**Displays the player's coin balance
 * @param coins - the player's current number of coins
 * @returns text showing the coin count
 */
export default function TotalCoins({ coins }: TotalCoinsProps) {
  return <p className="total-coins"> Coins: {coins}</p>;
}
