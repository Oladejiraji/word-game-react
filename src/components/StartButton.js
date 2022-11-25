import React, {useEffect} from 'react'
import {checkWin} from '../helper/Helper';



const StartButton = ({startGame, playable, high, selectedWord, answerWord, setPlayable, youLose, setAnswerWord, startMode, setStartMode, playAgain, round, restartGame, time, setTime, seeHigh}) => {
    let notification = '';
    let result = '';
    let startName = '';
    let playableChoose = undefined;
    if (startMode === false) {
        if (high === '') {
            notification = 'Rearrange the words as fast as possible';
            startName = 'Start';
        }
    }

    if (checkWin(selectedWord, answerWord) === 'lose') {
        // playableChoose = true;
        // startName = '';
        // notification = '';
        // result = '';
        youLose();
    } else if (checkWin(selectedWord, answerWord) === 'win') {
        playableChoose = false;
        startName = 'Next';
        notification = `Round ${round + 1}`;
        result = 'Correct'
    } else if (time === 'Time Up!') {
        playableChoose = false;
        startName = 'Restart';
        let yourScore = (round * 10) - 10
        notification = `Your Score is ${yourScore}`;
        result = 'Time Up!'
    }

    useEffect(() => {
        if (playableChoose !== undefined) {
          setPlayable(playableChoose);
        }
    })


    if (startName === 'Start' || startName === 'Restart' ) {
        return (
            <div className="modal" style={notification !== ''
            ? {display: 'flex'} : {}}>
                <div style={modalContent}>
                    <p style={par}>{result}</p>
                    <p style={par}>{notification}</p>
                    <div>
                        <button onClick={startName === 'Start' ? startGame : restartGame} style={start}>{startName}</button>
                        <button onClick={seeHigh} style={startHigh}>High Score</button>
                    </div>

                </div>
            </div>
        )
    } else if (startName === 'Next') {
        return (
            <div className="modal" style={notification !== ''
            ? {display: 'flex'} : {}}>
                <div style={modalContent}>
                    <p style={par}>{result}</p>
                    <p style={par}>{notification}</p>
                    <div>
                        <button onClick={playAgain} style={start}>{startName}</button>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="modal" style={notification !== ''
            ? {display: 'flex'} : {}}>
                <div style={modalContent}>
                    <p style={par}>{result}</p>
                    <p style={par}>{notification}</p>
                    <div>
                        <button onClick={restartGame} style={start}>{startName}</button>
                        <button onClick={seeHigh} style={startHigh}>High Score</button>
                    </div>

                </div>
            </div>
        )
    }
   
}


const modalContent = {
    background: '#fc766aff',
    width: '280px',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)',
    textAlign: 'center'
}

const par = {
    marginBottom: '1rem',
    fontWeight: 'bold',
    fontSize: '1.2rem'
}

const start = {
    padding: '0.6rem',
    background: '#5b85b1ff',
    borderWidth: 0,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer'
}

const startHigh = {
    padding: '0.6rem',
    background: '#5b85b1ff',
    borderWidth: 0,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '0.4rem'
}

export default StartButton
