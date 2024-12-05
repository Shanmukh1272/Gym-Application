import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = ({ onClick }) => {
  return (
    <Typography onClick={onClick} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <Typography onClick={onClick} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyParts,bodyPart, setBodyPart }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  return (
    <Box display="flex" alignItems="center" className="scroll-container">
      {/* Left Arrow */}
      <LeftArrow onClick={scrollLeft} />

      {/* Scrollable Content */}
      <Box
        ref={scrollRef}
        className="scroll-content"
        display="flex"
        overflow="auto"
        whiteSpace="nowrap"
      >
        {data.map((exercise) => (
          <Box
            key={exercise.id || exercise}
            itemID={exercise.id || exercise}
            title={exercise.id || exercise}
            m="0 40px"
          >
          {bodyParts ? (<BodyPart exercise={exercise} bodyPart={bodyPart} setBodyPart={setBodyPart} /> ):
          (<ExerciseCard exercise={exercise} />)}
          </Box>
        ))}
      </Box>

      {/* Right Arrow */}
      <RightArrow onClick={scrollRight} />
    </Box>
  );
};

export default HorizontalScrollBar;
