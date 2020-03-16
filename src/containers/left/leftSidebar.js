import React, {Component} from "react";
import './style.css';
import logo from '../../imgs/logo.png';

export default class LeftSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="leftSidebar">
                <div className="logo-container">
                    <h3>Kuraga</h3>
                    <img src={kuraga} alt="Kuraga" className="kuraga" />
                </div>
            </div>
        )
    }
}
