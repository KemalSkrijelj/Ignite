//Base URL
const base_url = "https://api.rawg.io/api";
const apiKey = "c84e397231ed4407ab608fc978756728";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}/${popular_games}`;
export const upcomingGamesURL = () => `${base_url}/${upcoming_games}`;
export const newGamesURL = () => `${base_url}/${new_games}`;

export const gameDetailsURL = (gameID) =>
  `${base_url}/games/${gameID}?key=${apiKey}`;

export const gameScreenshotURL = (gameID) =>
  `${base_url}/games/${gameID}/screenshots?key=${apiKey}`;

export const searchGameURL = (game_name) =>
  `${base_url}/games?search=${game_name}&page_size=9&key=${apiKey}`;
