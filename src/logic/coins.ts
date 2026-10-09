import type { Player } from "../types.ts";

/**
 * Changes the coins of the current player, and makes sure the same player in the players list gets the same change.
 * Does nothing if no player is selected.
 * @param currentPlayer - the player who is playing right now, or null
 * @param players - the whole list of players
 * @param amount - coins to add (negative number to take coins away)
 * @returns the updated currentPlayer and players list
 */
export function changePlayerCoins(
  currentPlayer: Player | null,
  players: Player[],
  amount: number,
): { currentPlayer: Player | null; players: Player[] } {
  if (!currentPlayer) {
    return { currentPlayer, players };
  }

  const updatedPlayer: Player = {
    ...currentPlayer,
    coins: currentPlayer.coins + amount,
  };

  return {
    currentPlayer: updatedPlayer,
    players: players.map((player) =>
      player.name === updatedPlayer.name ? updatedPlayer : player,
    ),
  };
}
