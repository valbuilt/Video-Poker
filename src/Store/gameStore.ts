import { create } from "zustand";
import type { Player, PlayingCard } from "../types";

type GameState = {
  players: Player[];
  currentPlayer: Player | null;
  deck: PlayingCard[];
  hand: PlayingCard[];
  discarded: PlayingCard[];
};

export const useGameStore = create<GameState>(() => ({
  players: [],
  currentPlayer: null,
  deck: [],
  hand: [],
  discarded: [],
}));
