import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetail from "../actions/DetailAction";
import { Link } from "react-router-dom";
import { smallImg } from "../utils";
const Game = ({ name, id, released, image }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  const [imgSrc, setImgSrc] = useState(smallImg(image, 640));

  const handleImageError = () => {
    setImgSrc(image);
  };
  return (
    <>
      <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
        <Link to={`/game/${id}`}>
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
          <p>{released}</p>
          <motion.img layoutId={`image ${stringPathId}`} src={imgSrc} alt={name} onError={handleImageError} />
        </Link>
      </StyledGame>
    </>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
