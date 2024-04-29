import Tile from '../Tile/Tile';
import './Chessboard.css';
import React, { useRef, useEffect, useState } from 'react';
import Blackpawn from './pawn_b.png'
import Whitepawn from './pawn_w.png'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];



const pieces=[];

pieces.push({ image: Blackpawn, x: 0, y: 7 });
pieces.push({ image: Blackpawn, x: 1, y: 7 });
pieces.push({ image: Blackpawn, x: 0, y: 6 });
pieces.push({ image: Blackpawn, x: 2, y: 7 });
pieces.push({ image: Blackpawn, x: 0, y: 5 });
pieces.push({ image: Blackpawn, x: 1, y: 6 });
pieces.push({ image: Blackpawn, x: 3, y: 7 });
pieces.push({ image: Blackpawn, x: 0, y: 4 });
pieces.push({ image: Blackpawn, x: 1, y: 5 });
pieces.push({ image: Blackpawn, x: 2, y: 6 });

pieces.push({ image: Whitepawn, x: 7, y: 0 });
pieces.push({ image: Whitepawn, x: 7, y: 1 });
pieces.push({ image: Whitepawn, x: 6, y: 0 });
pieces.push({ image: Whitepawn, x: 7, y: 2 });
pieces.push({ image: Whitepawn, x: 5, y: 0 });
pieces.push({ image: Whitepawn, x: 6, y: 1 });
pieces.push({ image: Whitepawn, x: 7, y: 3 });
pieces.push({ image: Whitepawn, x: 4, y: 0 });
pieces.push({ image: Whitepawn, x: 5, y: 1 });
pieces.push({ image: Whitepawn, x: 6, y: 2 });

export default function Chessboard() {
    const chessboardRef = useRef(null);
    const [droppedPieceCoordinates, setDroppedPieceCoordinates] = useState(null);
    let activePiece= null;

    function grabPiece(e) {
        const element = e.target;
        if (element.classList.contains("chess-piece")) {
            const x = e.clientX - 25;
            const y = e.clientY - 25;
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            activePiece = element;
        }
    }

    function movePiece(e) {
        const chessboard = chessboardRef.current;
        if (activePiece && chessboard) {
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop - 25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 25;
            const maxY = chessboard.offsetTop + chessboard.clientWidth - 25;
            const x = e.clientX - 25;
            const y = e.clientY - 25;
            activePiece.style.position = "absolute";

            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }

            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            } else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }

    function dropPiece(e) {
        if (activePiece) {
            const y = e.clientY;
            const x = e.clientX;
            setDroppedPieceCoordinates({ x, y })
            activePiece = null;
        }
    }

    let board=[];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image;
            pieces.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            board.push(<Tile key={`${j} ${i}`} image={image} number={number} />);
        }
    }

    useEffect(() => {
        if (droppedPieceCoordinates) {
            console.log('Dropped piece coordinates:', droppedPieceCoordinates);
        }
    }, [droppedPieceCoordinates]);

    return (
        <div onMouseUp={(e) => dropPiece(e)} onMouseMove={(e) => movePiece(e)} onMouseDown={e => grabPiece(e)} id="chessboard" ref={chessboardRef}>
            {board}
        </div>
    );
}
