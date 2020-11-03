import React, { Component } from "react";
import ReactDOM from 'react-dom';

import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection'
import Navigation from './sections/navigation'
import SnowStorm from 'react-snowstorm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this);
    this.state = {
      color1: "#004080",
      color2: "#00bfff",
      color3: "#1e90ff",
    };
  }
  change() {
    if(this.state.color1=="#004080"){
      this.setState({ color1: "#ffd700", color2: "#daa520", color3: "#ffa500" })
    }
    if(this.state.color1=="#ffd700"){
      this.setState({ color1: "#c71585", color2: "#ff00ff", color3: "#ba55d3" })
    }
    if(this.state.color1=="#c71585"){
      this.setState({ color1: "#008000", color2: "#006400", color3: "#556b2f" })
    }
    if(this.state.color1=="#008000"){
      this.setState({ color1: "#da70d6", color2: "#9370db", color3: "#7b68ee" })
    }  
    if(this.state.color1=="#da70d6"){
      this.setState({ color1: "#004080", color2: "#00bfff", color3: "#1e90ff" })
    }
  }

  render() {

    return (
      <div className="App">
        <SnowStorm />
        <Navigation action={this.change} color={this.state.color1}/>
        <TitlesAndIcons color={this.state.color1} />
        <AboutSection color={this.state.color2} />
        <SkillSection color={this.state.color3} />
      </div>
    );
  }

}

export default App;
