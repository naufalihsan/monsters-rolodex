import './card.styles.css';

const Card = ({ monster: { id, name, email } }) => {
    return <div className="card-container">
        <img
            src={`https://robohash.org/Z${id}A.png?set=set4&size=180x180`}
            alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}

export default Card;