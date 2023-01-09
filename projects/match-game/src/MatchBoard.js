
import React, { useEffect, useState } from 'react'
import Card from "./Card"
import { v4 as uuidv4 } from 'uuid';


//animate cards

const MatchBoard = () => {

    const [turns, setTurns] = useState(0)
    const initialBoard = [
        { card: 'cat1', id: uuidv4(), flipped: false },
        { card: 'cat3', id: uuidv4(), flipped: false },
        { card: 'cat5', id: uuidv4(), flipped: false },
        { card: 'cat2', id: uuidv4(), flipped: false },
        { card: 'cat4', id: uuidv4(), flipped: false },
        { card: 'cat6', id: uuidv4(), flipped: false },
        { card: 'cat5', id: uuidv4(), flipped: false },
        { card: 'cat3', id: uuidv4(), flipped: false },
        { card: 'cat6', id: uuidv4(), flipped: false },
        { card: 'cat4', id: uuidv4(), flipped: false },
        { card: 'cat2', id: uuidv4(), flipped: false },
        { card: 'cat1', id: uuidv4(), flipped: false }
    ]

    const [boardState, setBoardState] = useState(initialBoard)
    const [clickedCard, setClickedCard] = useState()
    const [flippedCard, setFlippedCard] = useState()
    const [matchedCards, setMatchedCards] = useState([])
    const [isVisible, setIsVisible] = useState(false)


    const shuffleBoard = () => {
        setBoardState(initialBoard.sort((a, b) => 0.5 - Math.random()))
    }
    const flipCard = (card) => {
        if (clickedCard || matchedCards.includes(card.id)) {
            console.log("cannot click")
        } else {

            setBoardState(boardState.map((c) => {
                if (c.id === card.id) {
                    return { ...card, flipped: true }
                }
                else return c
            }))
            setClickedCard(card)
            if (!flippedCard) {
                setFlippedCard(card)
                setClickedCard(null)
            } else if (flippedCard.card === card.card) {
                console.log('match!')
                setMatchedCards([...matchedCards, flippedCard.id, card.id])
                setFlippedCard(null)
                setClickedCard(null)
                setTurns(turns + 1)
            } else {
                setTurns(turns + 1)
                setTimeout(() => {
                    setBoardState(boardState.map((c) => {
                        if (c.id === card.id) {
                            return { ...card, flipped: false }
                        } else if (c.id === flippedCard.id) {
                            return { ...flippedCard, flipped: false }
                        }
                        else return c
                    }))
                    setFlippedCard(null)
                    setClickedCard(null)
                }, "800")
            }
        }
    }

    useEffect(() => {
        if (matchedCards.length === boardState.length) {
            setIsVisible(true)
        }
    }, [matchedCards, boardState])

    const handleReset = () => {
        setBoardState(initialBoard)
        setFlippedCard(null)
        setClickedCard(null)
        setMatchedCards([])
        setTurns(0)
    }

    const handleNewGame = () => {
        handleReset()
        shuffleBoard()
        setIsVisible(false)
    }

    return (
        <div>
            <h1>Cat Match</h1>
            <div className={`alert ${isVisible ? "visible" : ""}`}>
                <h3>You won in {turns} turns!</h3>
                <button onClick={handleNewGame}>New Game</button>
                <span className="material-symbols-outlined close" onClick={() => setIsVisible(false)}>
                    close
                </span>

            </div>
            <button onClick={handleNewGame}>New Game</button><p>Turns: {turns}</p>
            <div className='board'>
                {boardState.map((card) => (
                    <Card key={card.id} card={card} flipCard={flipCard} />
                ))}
            </div>
        </div>
    );
}

export default MatchBoard;