import { ADD_POKE } from "./pokeTypes";
import { REMOVE_POKE } from "./pokeTypes";

export const addPoke = (poke) => {
  return {
    type: ADD_POKE,
    payload: poke,
  };
};
export const removePoke = (poke) => {
  return {
    type: REMOVE_POKE,
    payload: poke,
  };
};
