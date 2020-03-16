import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import './style.css';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            shortcut: '',
            desc: '',
        }
    }
    handleChane = ({ target: { id, value }}) => this.setState({[id]: value });

    submit = () => {
        const { name, shortcut, desc } = this.state;
        if (!name || !shortcut || !desc) {
            alert('Заполни все поля');
            return null;
        }
        const db = firebase.database();
        db.ref('name').push(name);
        db.ref('shortcut').push(shortcut);
        db.ref('desc').push(desc);

        this.setState({ name: '', shortcut: '', desc: '' });
        alert('Все было записано в базу');
    };

    render() {
        return (
            <div className="admin-container">
                <TextField
                    id="name"
                    label="Название"
                    variant="outlined"
                    onChange={this.handleChane}
                />
                <TextField
                    id="shortcut"
                    label="Краткое описание"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                    onChange={this.handleChane}
                />
                <TextField
                    id="desc"
                    label="Полное описание"
                    variant="outlined"
                    multiline
                    rowsMax="30"
                    onChange={this.handleChane}
                />
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Загрузить фото
                    </Button>
                </label>
                <hr/>
                <Button variant="contained" onClick={this.submit}>Отправить</Button>
            </div>

        )
    }
}
