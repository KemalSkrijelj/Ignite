/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImg } from "../utils";

import playStation from "../img/playstation.png";
import steam from "../img/steam.png";
import xBox from "../img/xbox.png";
import nintendo from "../img/nintendo.png";
import apple from "../img/apple.png";
import gamepad from "../img/gamepad.png";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);

  const handleImageError = (e) => {
    e.target.src = game.background_image;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playStation;
        case "PlayStation 4":
          return playStation;
      case "Xbox Series S/X":
        return xBox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "Gamepad":
        return gamepad;
      case "Xbox One":
        return xBox;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms:</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      className="img-platforms"
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImg(game.background_image, 1280)}
                alt={game.background_image}
                onError={handleImageError}
              />
            </Media>
            <Desc>
              <p>{game.description_raw}</p>
            </Desc>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImg(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                  onError={(e) => (e.target.src = screen.image)}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit--scrollbar {
    width: 0.5rem;
  }
  &::-webkit--scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit--scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  .img-platforms {
    width: 30px;
    height: 30px;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Desc = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
