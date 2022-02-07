import { ADD_POKE } from "./pokeTypes";
import { REMOVE_POKE } from "./pokeTypes";

const initialState = {
  heroTeam: [],
};
const pokeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POKE:
      return {
        heroTeam: state.heroTeam.concat(payload),
      };
    case REMOVE_POKE:
      return {
        heroTeam: state.heroTeam.filter((poke) => poke.id !== payload.id),
      };
    default:
      return state;
  }
};

export default pokeReducer;
