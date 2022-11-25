import React from 'react'

const HighScore = ({round}) => {
    return (
        <div style={barContainer}>
            <div style={bar}>Your Score:</div>
            <div style={high}>{(round * 10) - 10}</div>
        </div>
    )
}

const barContainer = {
    position: 'absolute',
    top: '100px',
    right: '40px',
    background: '#fc766aff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)'
}

const bar = {
   
}

const high = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.2rem'
}

export default HighScore
