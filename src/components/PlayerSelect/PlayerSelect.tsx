import { useState } from "react";
import type { Player } from "../../types";

/**
 * Shows a list of existing players and lets the user create a new one.
 * Clicking a player doesn't do anything yet. I'll connect that once I've got Zustand and routing set up.
 * @returns a list of existing players (clickable) and a form to add a new one
 */
export default function PlayerSelect() {
  const [players, setPlayers] = useState([] as Player[]);
  const [newName, setNewName] = useState("");

  /**
   * Updates newName every time the input changes, so it always matches what's currently typed.
   * @param event - the input's change event
   * @returns nothing
   */
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewName(event.target.value);
  }

  /**
   * Creates a new player with the typed name and 100 starting coins, adds them to the list, and clears the input.
   * Does nothing if the name is empty (stops the function).
   * @returns nothing
   */
  function addPlayer() {
    if (newName.trim() === "") {
      return;
    }
    const newPlayer: Player = { name: newName, coins: 100 };
    setPlayers([...players, newPlayer]);
    setNewName("");
  }

  /**
   * Will set this player as the current player and take them to the game screen once the store and routing exist. Right now it just logs.
   * @param player - the player that was clicked
   * @returns nothing
   */
  function selectPlayer(player: Player) {
    console.log("Selected:", player.name);
  }

  return (
    <section>
      <h2>Choose Player</h2>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            <button onClick={() => selectPlayer(player)}>
              {player.name}: {player.coins} coins
            </button>
          </li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={handleNameChange} />
      <button onClick={addPlayer}>New Player</button>
    </section>
  );
}
