import Card from './card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => {
    return <div className='card-list'>
        {monsters.map((monster, index) => {
            return <Card key={index} monster={monster} />
        })}
    </div>
}

export default CardList;