import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Card from '../Card';
import './style.css';

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{id: 1},{id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}],
        }
    }

    render() {
        const { cards } = this.state;
        return (
            <div className="mainContainer">
                <div className="search-container">
                    <TextField
                        className="search-input"
                        label="Поиск"
                        rows={1}
                        color="secondary"
                    />
                </div>
                <div className="cards-container">
                    {
                      cards.map(card => (
                          <Card key={card.id} />
                      ))
                    }
                </div>
            </div>
        )
    }
}
