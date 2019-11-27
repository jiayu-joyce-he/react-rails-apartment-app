import React from "react";
import { Link } from "react-router-dom";

import ApartmentList from './ApartmentList'

class Apartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: []
    };
  }

  render() {
    const { apartments } = this.state;
    const allApartments = apartments.map((apartment, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={apartment.image}
            className="card-img-top"
            alt={`${apartment.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{apartment.contact_name}</h5>
            <Link to={`/recipe/${apartment.id}`} className="btn custom-button">
              View Apartment
            </Link>
          </div>
        </div>
      </div>
    ));
    const noApartment = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No apartment yet. Why not <Link to="/new_recipe">Create One</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron">
          <div className="container py-5">
            <h1 className="display-4">Apartments for Everyone</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular Apartments
            </p>
            <hr class="my-4" />
            <p>Share you apartment listing here to find qualified match.</p>
            <p class="lead">
              <Link to="/apartment" className="btn btn-primary btn-lg">
                List New Apartment
              </Link>
            </p>
          </div>
        </section>
          <main className="container">
            <div className="row">
              {Apartments.length > 0 ? allApartments : noApartment}
            </div>
          </main>

      </>
    );
  }
}
export default Apartments
