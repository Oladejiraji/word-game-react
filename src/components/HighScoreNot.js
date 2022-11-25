import React from "react";

const HighScoreNot = ({high, startMode, startGame, restartGame, setHigh, setStartMode, score}) => {
  function removeHigh () {
    setHigh('');
    setStartMode(false);
  }
  let ident = 1;

  return (
    <div className='modalTwo' style={high === true ? {display: 'flex'} : {}}>
      <div style={modalContent}>
        <h1>High Score</h1>
        <ul style={ul}>
          {
            score.slice(1, 3)
            .sort((a,b) => b.scores - a.scores)
            .map((ind, i) => <li key={i} style={li}>{ident++}. <span style={scorer}>{ind.scores}</span></li>)
          }
        </ul>
        <div style={{texAlign:'center'}}>
          <button onClick={removeHigh} style={start}>Back</button>
        </div>
      </div>
    </div>
  );
};

const modalContent = {
    background: '#fc766aff',
    width: '250px',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)',
}

const ul = {

}

const li = {
    listStyle: 'none',
    marginTop: '0.5rem'
}

const scorer = {
    fontWeight: 'bold',
    marginLeft: '0.3rem'
}

const start = {
  padding: '0.6rem',
  background: '#5b85b1ff',
  borderWidth: 0,
  fontWeight: 'bold',
  fontSize: '1.1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  texAlign: 'center',
  marginTop: '1rem'
}
export default HighScoreNot;
