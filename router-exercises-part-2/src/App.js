import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import whiskey from "./imgs/whiskey.jpg"
import hazel from "./imgs/hazel.jpg"
import tubby from "./imgs/tubby.jpg"
import DogList from "./DogList"
import Whiskey from "./Whiskey"
import './App.css';

class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
        </Switch>
      </div>
    )
  }
}

export default App;