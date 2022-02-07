import { UPDATE_RECENT_SEARCH } from "./searchTypes";

export const updateRecentSearch = (pokes) => {
  return {
    type: UPDATE_RECENT_SEARCH,
    payload: pokes,
  };
};
