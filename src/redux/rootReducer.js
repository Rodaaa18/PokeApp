import { combineReducers } from "redux";
import pokeReducer from "./pokeTeam/pokeReducer";
import searchReducer from "./recentSearch/searchReducer";

const rootReducer = combineReducers({
  poke: pokeReducer,
  search: searchReducer,
});

export default rootReducer;
