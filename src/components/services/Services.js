/** @format */

import React, { Component } from "react";
import {
  FaGlassMartiniAlt,
  FaSurprise,
  FaWifi,
  FaBreadSlice
} from "react-icons/fa";
import Title from "../title/Title";
import "./Services.css";
import Fade from "react-reveal";

export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: <FaGlassMartiniAlt></FaGlassMartiniAlt>,
          title: "Free cocktails",
          desc: "24/7 bar service open at the bottom floor"
        },
        {
          icon: <FaSurprise></FaSurprise>,
          title: "Michelin Food",
          desc: "Try our best rated foods cooked by our master chefs"
        },
        {
          icon: <FaWifi></FaWifi>,
          title: "Free Wi-Fi",
          desc: "Non-stop service, 50MB/s broadband"
        },
        {
          icon: <FaBreadSlice></FaBreadSlice>,
          title: "Room Service",
          desc: "Service available 24/7"
        }
      ]
    };
  }

  render() {
    return (
      <section className="services">
        <Fade right>
          <Title title="Services"></Title>
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index}>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  }
}
