import React, { Component } from 'react';
import { Link, Element, Button } from 'react-scroll'
import data from "../data.json";
import TitlesAndIcons from '../sections/TitlesAndIcons'

import './navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className="navbar" style={{ backgroundColor: this.props.color }}>
                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <a>Skills</a>
                </Link>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <a>About</a>
                </Link>
                <button  onClick={this.props.action}>
                <img src={data.icons.magic} id="input_img"/>
                </button>
            </div>
        );
    }
}

export default Navigation