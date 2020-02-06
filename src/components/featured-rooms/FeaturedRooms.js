/** @format */

import React, { Component } from "react";
import { RoomContext } from "../../Context";
import Title from "../title/Title";
import Loading from "../loading/Loading";
import Room from "../room/Room";
import "./FeaturedRooms.css";
import Fade from "react-reveal";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <Fade bottom>
          <div className="featured-rooms-center">
            {loading === true ? <Loading /> : rooms}
          </div>
        </Fade>
      </section>
    );
  }
}
