import React, { Component } from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import FullPage from '../components/fullPage';
import './AboutSection.css'
import DownIcon from '../components/downicon'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AboutSection extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color }}>
                <FullPage >
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <div className="paragraphs" >
                        {data.sections[0].items.map(p => {
                            return <p>{p.content} </p>
                        })}
                    </div>
                </FullPage>
                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <DownIcon icon={data.icons.down}
                    />
                </Link>
                <div style={{
                    transform: "translateY(-45px)"
                }}>
                    <Element name="test2" className="element"></Element>
                </div>

            </div>

        )
    }
}
export default AboutSection;