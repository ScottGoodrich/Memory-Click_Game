import React, { Component } from "react";
import "./style.css";

class Scores extends Component {
    state = {
        score: 0,
        highScore: 0
      };

    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
      };
    
    render() {
        return (
              <p>Score: <span>{this.state.score}</span> High Score: <span>{this.state.highScore}</span></p>
        );
      }
}

export default Scores;