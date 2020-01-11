import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
    images: images,
    message: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  componentDidMount() {}

  // An image was clicked...
  imageClick = id => {
    console.log(id);
    // 
    const images = this.state.images.find(image => image.id === id);

    // 
    if (images === undefined) {
      this.setState({
        images: images,
        message: "You guessed incorrectly!",
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
      });
    } else {

    }

    }
  };

  randomizer = arr => {
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];
      const j = Math.floor(Math.random() * (i + 1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
    console.log(arr)
  };

  imageArray = this.state.images.map((image) => {
    image = { image }
  });

  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </Hero>
          <Wrapper>
            {this.randomizer(this.imageArray)}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
