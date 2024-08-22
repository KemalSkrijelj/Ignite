import axios from "axios";
import { popularGamesURL } from "../api";

const loadGames = () => async (dispatch) => {
  try {
    const popularData = await axios.get(popularGamesURL());
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popularData.data.results,
      },
    });
  } catch (error) {
    console.error("Error fetching games:", error);
    dispatch({
      type: "FETCH_GAMES_ERROR",
      payload: error.message,
    });
  }
};

export default loadGames;
