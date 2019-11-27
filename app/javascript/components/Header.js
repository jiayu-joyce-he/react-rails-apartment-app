import React from "react";
import { Link } from "react-router-dom";

import ApartmentList from './ApartmentList'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
  }

  render() {
    return (
      <>
        <section className="jumbotron">
          <div className="container py-5">
            <h1 className="display-4">Apartments for Everyone</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular Apartments
            </p>
            <hr className="my-4" />
            <p>Share you apartment listing here to find qualified match.</p>
            <p className="lead">
              <Link to="/new_apartment" className="btn btn-primary btn-lg">
                List New Apartment
              </Link>
            </p>
          </div>
        </section>
      </>
    );
  }
}
export default Header
