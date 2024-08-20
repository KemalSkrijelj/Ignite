//Base URL
const base_url = "https://api.rawg.io/api/";

//Current day/month/year

const getYear = new Date().getFullYear();
const getMonth = new Date().getMonth();
const getDay = new Date().getDay();
const currentDate = `${getYear}-${getMonth}-${getDay}`;

const lastYear = `${getYear - 1} - ${getMonth}- ${getDay}`;
const nextYear = `${getYear + 1} - ${getMonth}- ${getDay}`;

//Populargames

const popular_games = `games?dates=${lastYear}, ${currentDate}&ordering=-rating&page_size=10`;


const popularGamesURL = () => `${base_url}${popular_games}`

console.log(popularGamesURL())