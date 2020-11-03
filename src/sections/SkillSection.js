import React, { Component } from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import FullPage from '../components/fullPage';
import SkillCard from '../components/SkillCard';
import './SkillSection.css'

class SkillSection extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color }}>
                <FullPage >
                    <h3>{data.sections[1].title} </h3>
                    <div className="cards-wrapper" >
                        {data.sections[1].items.map(eachskill => {
                            return (
                                <SkillCard skill={eachskill} />
                            );
                        })}
                    </div>
                </FullPage>
            </div>

        )
    }
}
export default SkillSection;