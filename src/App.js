import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FriendCard from "./components/FriendCard";
import Hero from "./components/Hero";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import friends from "./friends.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { friends };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>Pupster</h1>
            <h2>They're the Good Boys and Girls</h2>
          </Hero>
          <Wrapper>
            <h1 className="title">Friends List</h1>
            {this.state.friends.map(friend => (
              // <Route exact path="/" component={About} />
              <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                // key={friend.key}
                // name={friend.name}
                image={friend.image}
              // occupation={friend.occupation}
              // location={friend.location}
              />
            ))}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
