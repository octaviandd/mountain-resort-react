/** @format */

import React, { Component } from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/services/Services";
import FeaturedRooms from "../components/featured-rooms/FeaturedRooms";
import RoomsContainer from "../components/rooms-container/RoomsContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero>
          <Banner
            title="Luxourious Rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        <RoomsContainer />
      </div>
    );
  }
}
