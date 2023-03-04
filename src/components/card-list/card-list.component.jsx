import { Component } from "react";

import Card from './card.component';

import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return <div className='card-list'>
            {monsters.map((monster, index) => {
                return <Card key={index} monster={monster} />
            })}
        </div>
    }
}


export default CardList;