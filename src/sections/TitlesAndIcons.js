import React, { Component } from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import FullPage from '../components/fullPage';
import './TitlesAndIcons.css'
import DownIcon from '../components/downicon'
import { Link, Element } from 'react-scroll'

class TitlesAndIcons extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color }} >
                <FullPage >
                    <h1 className="title"> {data.tilte}</h1>
                    <div>
                        <h2>
                            {data.subtitle}
                        </h2>
                    </div>
                    <div className="icons-wrapper" >
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon" >
                                        <SocialIcon url={data.links[key]} />
                                    </div>
                                );
                            })
                        }

                    </div>
                </FullPage>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <DownIcon icon={data.icons.down}
                    />
                </Link>
                <div style={{ transform: "translateY(-45px)" }}>
                    <Element name="test1" className="element"></Element>
                </div>
            </div>

        )
    }
}
export default TitlesAndIcons;