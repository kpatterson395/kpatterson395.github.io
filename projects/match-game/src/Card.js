
const Card = ({ card, flipCard }) => {

    return (
        <div className="card" onClick={() => flipCard(card)}>
            <img style={{ opacity: card.flipped ? 1 : 0 }} src={`./img/${card.card}.jpg`} alt="card" />
        </div>
    );
}

export default Card;