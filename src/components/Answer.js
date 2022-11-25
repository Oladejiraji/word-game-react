import React from "react";

const Answer = ({ answerWord, selectedWord }) => {
  return (
    <div style={word}>
      {selectedWord.split('').map((word, i) => {
          return(
            <span style={letter} key={i}>
                {answerWord[i]}
            </span>
          )
    })}
    </div>
  );
};

const word = {
  textAlign: "center",
};

const letter = {
  marginRight: "0.6rem",
  padding: "0rem 0.4rem",
  fontWeight: "bold",
  fontSize: "1.3rem",
  borderBottom: "3px solid #000",
  textTransform: "lowercase",
};

export default Answer;
