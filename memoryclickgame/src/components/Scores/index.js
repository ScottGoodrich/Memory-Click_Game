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
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text">Score: {this.state.score} High Score: {this.state.highScore}</p>
              {/* <p className="card-text">High Score: {this.state.highScore}</p> */}
            </div>
          </div>
        );
      }
}

export default Scores;