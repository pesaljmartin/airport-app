import React from "react";

import FlightsItem from "../FlightsItem";
import "./index.scss";

const FlightsWrapper = ({ flights, sortByName, sortByTime }) => {
  return (
    <div className="flights-wrapper">
      <div className="flights-wrapper__sort">
        <div className="flights-wrapper__sort__item">
          <div className="flights-wrapper__sort__item__arrows">
            <p>
              <i className="arrow down" onClick={() => sortByName(false)} />
            </p>
            <p>
              <i className="arrow up" onClick={() => sortByName(true)} />
            </p>
          </div>
          <p>Name</p>
        </div>
        <div className="flights-wrapper__sort__item">
          <div className="flights-wrapper__sort__item__arrows">
            <p>
              <i className="arrow down" onClick={() => sortByTime(false)} />
            </p>
            <p>
              <i className="arrow up" onClick={() => sortByTime(true)} />
            </p>
          </div>
          <p>Time</p>
        </div>
      </div>
      {flights.map(value => {
        return <FlightsItem key={value.segment_id} flight={value} />;
      })}
    </div>
  );
};

export default FlightsWrapper;
