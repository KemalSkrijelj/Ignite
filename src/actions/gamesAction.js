import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  try {
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    console.error("Error fetching games:", error.message);
    console.log("Full error object:", error);
  }
};
