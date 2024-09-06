import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetail from "../actions/DetailAction";
import { Link } from "react-router-dom";
import { smallImg } from "../utils";
import { popUp } from "../animations";

const Game = ({ name, id, released, image }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const [imgSrc, setImgSrc] = useState(image); 

  useEffect(() => {
    try {
      const resizedImage = smallImg(image, 640);
      setImgSrc(resizedImage);
    } catch (error) {
      console.warn("Resizing failed, using original image", error);
      setImgSrc(image); 
    }
  }, [image]);

  const handleImageError = (event) => {
    event.preventDefault();
    setImgSrc(image); 
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={imgSrc}
          alt={name}
          onError={handleImageError} 
        />
      </Link>
    </StyledGame>
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
