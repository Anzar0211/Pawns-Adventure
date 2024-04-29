import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-column">
            <h1 className='heading'>Pawns Adventure</h1>
                <img src="../images/HomeChessboard.png" alt="Left Image" />
            </div>
            <div className="right-column">
                <button className="top-left-paragraph">Sign In</button>
                <h1 style={{ fontSize: '80px',fontStyle:'bold',fontWeight:'bolder', color:'white',textAlign:'center',marginBottom:'10px',fontFamily:'serif'}}>The Great Pawn Expedition !</h1>
                <button>Play Online</button>
                <button id="AI">
                    <a href="/PlayNow">PVP</a>    
                </button>
            </div>
        </div>
    );
}

export default Home;
