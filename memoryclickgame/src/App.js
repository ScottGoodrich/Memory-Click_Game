import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper"
import Title from "./components/Title";
import Scores from "./components/Scores";
import images from "./images.json";
import "./App.css";

class App extends React.Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  render() {
    return (
      <Container>
        <Title>Test Your Memory, "The Big Lebowski" Edition</Title>
        <Wrapper>
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.image}
            />
        ))}
        </Wrapper>
      </Container>
    );
  }
}
export default App;
