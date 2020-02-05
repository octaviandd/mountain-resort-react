/** @format */

import React, { Component } from "react";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import StyledHero from "../components/hero/StyledHero";
import defaultBcg from "../images/defaultBcg.jpeg";
import Banner from "../components/banner/Banner";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found..</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}></Banner>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((img, index) => {
              return <img key={index} src={img} alt={name}></img>;
            })}
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}sqft</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity}`}
              </h6>
              <h6>{pets ? `pets allowed` : `pets are not allowed`}</h6>
              <h6>{breakfast && `free breakfast included`}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
