import React, { useEffect } from "react";
import {ShuffleWord} from '../helper/Helper'


const Word = ({ selectedWord, setCurrentShuffle, currentShuffle, round }) => {
//    const wordArray = useRef('');

   useEffect(() => {
    // wordArray.current = ShuffleWord(selectedWord);
    setCurrentShuffle(ShuffleWord(selectedWord));
   }, [round, setCurrentShuffle, selectedWord])

  

  return (
    <div style={name}>
      <div>{currentShuffle}</div>
    </div>
  );
};

const name = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: "4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "35vh",
};

// const answer = {
//     background: '#fc766aff',
//     padding: '0.5rem 1rem',
//     borderRadius: '5px',
//     width: '20%',
//     boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)'
// }

export default Word;
