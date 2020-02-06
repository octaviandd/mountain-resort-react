/** @format */

/** @format */

import React, { Component } from "react";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Slide from "react-reveal/";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Interdum velit euismod in pellentesque massa placerat duisultricies.",
      open1: false,
      open2: false,
      open3: false,
      open4: false
    };

    this.showText1 = this.showText1.bind(this);
    this.showText2 = this.showText2.bind(this);
    this.showText3 = this.showText3.bind(this);
    this.showText4 = this.showText4.bind(this);
  }

  showText1 = e => {
    this.setState({
      open1: !this.state.open1
    });
  };
  showText2 = e => {
    this.setState({
      open2: !this.state.open2
    });
  };
  showText3 = e => {
    this.setState({
      open3: !this.state.open3
    });
  };
  showText4 = e => {
    this.setState({
      open4: !this.state.open4
    });
  };

  render() {
    return (
      <Slide top>
        <div className="info-fragment">
          <div className="info">
            <Banner title="Info" subtitle="Things to do">
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </div>
          <div className="sections-position">
            <section className="section-container">
              <h4 className="section-title" onClick={e => this.showText1(e)}>
                Local attractions
              </h4>
              <p
                className={
                  this.state.open1
                    ? "section-info" + " in"
                    : "section-info" + " out"
                }
              >
                {this.state.info}
              </p>
            </section>
            <section className="section-container">
              <h4 className="section-title" onClick={e => this.showText2(e)}>
                Skiing
              </h4>
              <p
                className={
                  this.state.open2
                    ? "section-info" + " in"
                    : "section-info" + " out"
                }
              >
                {this.state.info}
              </p>
            </section>
            <section className="section-container">
              <h4 className="section-title" onClick={e => this.showText3(e)}>
                Places to visit
              </h4>
              <p
                className={
                  this.state.open3
                    ? "section-info" + " in"
                    : "section-info" + " out"
                }
              >
                {this.state.info}
              </p>
            </section>
            <section className="section-container">
              <h4 className="section-title" onClick={e => this.showText4(e)}>
                Shops
              </h4>
              <p
                className={
                  this.state.open4
                    ? "section-info" + " in"
                    : "section-info" + " out"
                }
              >
                {this.state.info}
              </p>
            </section>
          </div>
        </div>
      </Slide>
    );
  }
}
