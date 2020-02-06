/** @format */
import React from "react";
import Banner from "../components/banner/Banner";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error">
      <Fade right>
        <div>
          <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </div>
      </Fade>
    </div>
  );
}
