import { ADD_POKE } from "./pokeTypes";
import { REMOVE_POKE } from "./pokeTypes";

const initialState = {
  pokeTeam: [],
};
const pokeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POKE:
      return {
        pokeTeam: state.pokeTeam.concat(payload),
      };
    case REMOVE_POKE:
      return {
        pokeTeam: state.pokeTeam.filter((poke) => poke.id !== payload.id),
      };
    default:
      return state;
  }
};

export default pokeReducer;
