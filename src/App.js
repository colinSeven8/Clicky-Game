import React, { Component } from "react";
import Image from "./components/Image";
import Hero from "./components/Hero";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import ImageList from "./components/ImageList";
import images from "./images.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Set the initial state
  state = {
    selectedImages: images,
    unselectedImages: images,
    message: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  componentDidMount() { }

  // An image was clicked...
  imageClick = id => {
    console.log(id);
    // Get the reduced set of already matched images
    const filteredImages = this.state.images.filter(image => image.id === id);

    // Check if user guess right first...
    if (filteredImages) {
      this.setState({
        images: images,
        unselectedImages: filteredImages, // Pass the remaining images
        message: "Look at the big brain on Brad!",
        score: this.state.score + 1,
        topScore: this.state.score
      })
    } else { // Wrong....

      this.setState({
        images: images,
        unselectedImages: images,
        message: "What did you do?",
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
      });
    }
    this.randomizer(images);
  };

  randomizer = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      const temp = arr[i];
      const j = Math.floor(Math.random() * (i + 1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
    console.log(arr)
  };

  render() {
    return (
      //<Router>
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Hero>
        <Wrapper>
          {
            this.state.images.map(image => (
              <Image
                image={images.image}
                imageClick={this.imageClick}
                score={this.score}
              />
            ))
          }
        </Wrapper>
        <Footer />
      </div>
      //</Router>
    );
  }
}

export default App;
