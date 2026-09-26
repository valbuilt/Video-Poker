import { useState } from "react";
import { useGameStore } from "../../store/gameStore";

/**
 * Shows a list of existing players and lets the user create a new one.
 * Clicking player sets them as the current player in the store.
 * @returns a list of existing players and a form to add a new one
 */
export default function PlayerSelect() {
  const players = useGameStore((state) => state.players);
  const addPlayer = useGameStore((state) => state.addPlayer);
  const selectPlayer = useGameStore((state) => state.selectPlayer);

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
   * Creates a new player with the typed name, via the store, and 100 starting coins, and clears the input.
   * Does nothing if the name is empty (stops the function).
   * @returns nothing
   */
  function handleAddPlayer() {
    if (newName.trim() === "") {
      return;
    }
    addPlayer(newName);
    setNewName("");
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
      <button onClick={handleAddPlayer}>New Player</button>
    </section>
  );
}
