import React from 'react'

const Header = () => {
    return (
        <header style={headerStyle}>
            Word Game
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '2rem 3rem',
    // background: '#333',
    color: '#fff'
}

export default Header
