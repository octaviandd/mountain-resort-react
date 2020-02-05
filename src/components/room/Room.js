/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultImg from "../../images/defaultBcg.jpeg";
import "./Room.css";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="def" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>per night</p>
        </div>
        <div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}

Room.protTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.sting).isRequired,
    price: PropTypes.number.isRequired
  })
};
