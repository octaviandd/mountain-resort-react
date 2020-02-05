/** @format */

import React, { Component } from "react";

import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import SingleRoom from "./SingleRoom";
import RoomsContainer from "../components/rooms-container/RoomsContainer";

export default class Rooms extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </React.Fragment>
    );
  }
}
