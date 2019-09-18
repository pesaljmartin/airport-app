import React, { useState, useEffect } from "react";

import FlightsWrapper from "../../components/Flights/FlightsWrapper";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("./data/index.json")
      .then(response => response.json())
      .then(data => {
        setFlights(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const sortByName = direction => {
    if (direction) {
      flights.sort((a, b) => {
        return a.origin.value > b.origin.value ? 1 : -1;
      });
    } else {
      flights.sort((a, b) => {
        return a.origin.value > b.origin.value ? -1 : 1;
      });
    }

    setFlights([...flights]);
  };

  const sortByTime = direction => {
    if (direction) {
      flights.sort((a, b) => {
        return a.departure - b.departure;
      });
    } else {
      flights.sort((a, b) => {
        return b.departure - a.departure;
      });
    }

    setFlights([...flights]);
  };

  return <FlightsWrapper {...{ flights, sortByName, sortByTime }} />;
};

export default Flights;
