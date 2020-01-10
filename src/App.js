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

  state = { images };

  imageClick = id => {
    const images = this.state.images.filter(image => image.id !== id);
    console.log(images);
    this.setState({ images });
  };

  randomizer = arr => {
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];
      const j = Math.floor(Math.random() * (i + 1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
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
            { this.randomizer(imageArray) }
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
