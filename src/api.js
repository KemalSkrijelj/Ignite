// Base URL
const base_url = "https://api.rawg.io/api/";

// Current day/month/year
const getYear = new Date().getFullYear();
const getMonth = String(new Date().getMonth() + 1).padStart(2, '0'); 
const getDay = String(new Date().getDate()).padStart(2, '0'); 

const currentDate = `${getYear}-${getMonth}-${getDay}`;
const lastYear = `${getYear - 1}-${getMonth}-${getDay}`;
const nextYear = `${getYear + 1}-${getMonth}-${getDay}`;

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
