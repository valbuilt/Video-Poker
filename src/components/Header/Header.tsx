import { NavLink } from "react-router";
import "./Header.css";

/**
 * The Nav bar links to the player select, game, and rules pages.
 * @returns a nav bar with links to all three pages
 */
export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Choose Player</NavLink>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/rules">Rules</NavLink>
      </nav>
    </header>
  );
}
