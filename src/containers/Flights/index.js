import React, { Component } from "react";
import axios from "axios";

import FlightsWrapper from "../../components/Flights/FlightsWrapper";

class Flights extends Component {
  state = {
    flights: []
  };

  componentDidMount() {
    this.getAllFlights();
  }

  getAllFlights = async () => {
    try {
      const response = await axios.get("./data/index.json");
      this.setState({
        flights: response.data
      });
    } catch (error) {
      console.error(error);
    }
  };

  sortByName = direction => {
    const { flights } = this.state;
    direction
      ? flights.sort((a, b) => {
          return a.origin.value > b.origin.value ? 1 : -1;
        })
      : flights.sort((a, b) => {
          return a.origin.value > b.origin.value ? -1 : 1;
        });

    this.setState({ flights });
  };

  sortByTime = direction => {
    const { flights } = this.state;
    direction
      ? flights.sort((a, b) => {
          return a.departure - b.departure;
        })
      : flights.sort((a, b) => {
          return b.departure - a.departure;
        });

    this.setState({ flights });
  };

  render() {
    return (
      <FlightsWrapper
        flights={this.state.flights}
        sortByName={this.sortByName}
        sortByTime={this.sortByTime}
      />
    );
  }
}

export default Flights;
