import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HighScore from "./components/HighScore";
import Word from "./components/Word";
import Answer from "./components/Answer";
import HighScoreNot from "./components/HighScoreNot";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import uuidv4 from 'uuid/v4'
import Blob from './components/Blob'
import "./App.css";

// Select Words
const words = ["play", "choose", "flair", "punt", "scrabble"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const LOCAL_STORAGE_KEY = 'Your High Score';



function App() {
  // State
  const [playable, setPlayable] = useState(false);
  const [startMode, setStartMode] = useState(false);
  const [time, setTime] = useState(10);
  const [round, setRound] = useState(1);
  const [high, setHigh] = useState('');
  const [shuffle, setShuffle] = useState(false);
  const [currentShuffle, setCurrentShuffle] = useState('');
  const [answerWord, setAnswerWord] = useState([]);
  const [score, setScore] = useState([{}]);
  const [currentId, setCurrentId] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        setAnswerWord((currentWord) => [...currentWord, letter]);
      } else if (playable && keyCode === 8) {
        // console.log(answerWord);
        if (answerWord.length > 0) {
          const newWord = [...answerWord];
          newWord.pop();
          setAnswerWord(newWord);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [answerWord, playable]);

  function startGame () {
    setPlayable(true);
    setStartMode(!startMode);
    setTime(10);
    setCurrentId([]);
  }

  function restartGame () {
    setPlayable(true);
    setAnswerWord([]);
    if (startMode === false) {
      setStartMode(true)
    }
    setRound(1);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    setTime(10);
    setCurrentId([])
  }

  function playAgain () {
    setAnswerWord([]);
    setPlayable(true);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    setRound(currentRound => currentRound + 1);
    setTime(10);
  }

  function youLose () {
    setAnswerWord([]);
    console.log(2345);
  }

  function seeHigh () {
    setHigh(true)
  }

  useEffect(() => {
    if (high === true) {
      const newScore = [...score];
      const currentScoreCheck = newScore.find(currentScoreCheck => currentScoreCheck.id === currentId);   
      if (currentScoreCheck) {
        console.log(0);
      } else {
        const currentHigh = (round * 10) - 10;
        if (currentHigh !== 0) {
          let id = uuidv4();
          setCurrentId(id);
          setScore(currentScore => [...currentScore, {id, scores:currentHigh }])
          console.log(2345);
        }
       
      } 
    }
  }, [high])

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedScore) setScore(storedScore)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(score));
  }, [score])

  return (
    <>
      <Blob />
      <div id="container">
        <Header />
        <Timer playable={playable} round={round} setPlayable={setPlayable}
        time={time} setTime={setTime} />
        <HighScore round={round} />
        <Word selectedWord={selectedWord} setShuffle={setShuffle}
        setCurrentShuffle={setCurrentShuffle} currentShuffle={currentShuffle}/>
        <Answer answerWord={answerWord} selectedWord={selectedWord} round={round} />
      </div>
      <HighScoreNot high={high} startMode={startMode} startGame={startGame}
      restartGame={restartGame} setHigh={setHigh} setStartMode={setStartMode}
      score={score} />
      <StartButton startGame={startGame} playable={playable} high={high}
      selectedWord={selectedWord} answerWord={answerWord} setPlayable={setPlayable}
      setAnswerWord={setAnswerWord} startMode={startMode} setStartMode={setStartMode}
      playAgain={playAgain} round={round} restartGame={restartGame}time={time}
      setTime={setTime} seeHigh={seeHigh} youLose={youLose} />
    </>
  );
}

export default App;
