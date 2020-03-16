import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import './style.css';
import logo from "../../imgs/logo.png";

export default class RightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="rightSidebar">
                <div className="logo-container">
                    <Typography variant="h4" component="h4" gutterBottom>
                       Kuraga
                    </Typography>
                    <img src={logo} alt="Kuraga" className="logo" />
                </div>

            </div>
        )
    }
}
