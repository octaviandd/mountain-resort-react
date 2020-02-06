/** @format */

import React from "react";
import RoomsFilter from "../rooms-filter/RoomsFilter";
import RoomsList from "../rooms-list/RoomsList";
import { RoomConsumer } from "../../Context";
import Loading from "../loading/Loading";
import Fade from "react-reveal";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        console.log(value);
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <Fade left>
              <RoomsFilter rooms={rooms} />
            </Fade>
            <Fade bottom>
              <RoomsList rooms={sortedRooms} />
            </Fade>
          </div>
        );
      }}
    </RoomConsumer>
  );
}
