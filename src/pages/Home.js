import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import Game from "../components/Game";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
