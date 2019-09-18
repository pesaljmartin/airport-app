import React from "react";

import "./index.scss";

const FlightsItem = props => {
  const { departure, origin, destination, detail } = props.flight;
  return (
    <div className="flights-item-wrapper">
      <div>
        <div className="flights-item-wrapper__route">
          <p>Destination: {origin && origin.value}</p>
          <p className="arrow-wrapper">
            <i className="arrow up" />
          </p>
          <p>{destination && destination.value}</p>
        </div>
        <p>Departure: {departure && new Date(departure).toLocaleString()}</p>
      </div>
      <div>
        <p>Flight number: {detail && detail.flight_number}</p>
        <p>
          Boarding time: {detail && new Date(detail.boarding).toLocaleString()}
        </p>
      </div>
      <div>
        <p>Gate: {detail && detail.gate}</p>
        <p>Seat: {detail && detail.seat}</p>
      </div>
    </div>
  );
};

export default FlightsItem;
