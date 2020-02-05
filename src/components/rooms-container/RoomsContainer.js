/** @format */

import React from "react";
import RoomsFilter from "../rooms-filter/RoomsFilter";
import RoomsList from "../rooms-list/RoomsList";
import { RoomConsumer } from "../../Context";
import Loading from "../loading/Loading";

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
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
