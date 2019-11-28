import React, { Component } from 'react'
import { Link } from "react-router-dom";


class ApartmentList extends Component {
  const getApartment = ()=>{
    return fetch("/apartment")
    .then((response)=>{
      if(response.status === 200){
        return response.json()
      }else{
        return new Promise(()=>{
          resolve({error: 'There was an error.'})
        })
      }
    })
  }

  render() {
    const { apartments } = this.props;
    const allApartments = apartments.map((apartment, index) => (
      <div key = {index} className = "apartment-card">
          <div className="card mb-3">
            <h3 className="card-header">
              {`${apartment.street_a} & ${apartment.street_b}`}
            </h3>
            <div className="card-body">
              <h5 className="card-title" className='apartment-age'>{`${apartment.contact_name} ${apartment.contact_number}  `}</h5>
            </div>
            <img style={{height: "auto", width: "100%", display: "block"}} src="https://live.staticflickr.com/68/172629460_f55d8b084d_z.jpg" alt="Card image" />
            <div className="card-body">
            <p className="card-text" className='apartment-enjoys'>{apartment.streetA}</p>
            </div>
            <div className="card-body">
               <a href="#" className="card-link">Show Details</a>
               <a href="#" className="card-link">Delete</a>
             </div>
             <div className="card-footer text-muted">
               {`Posted at ${apartment.created_at.split("").slice(0,10).join("")}`}
             </div>
          </div>
        </div>
    ));

    const noApartment = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No apartment yet. Why not <Link to="/new_apartment">post one?</Link>
        </h4>
      </div>
    );

    return (
      <div className = "apartment-cards-container">
        {apartments.length > 0 ? allApartments : noApartment}
		</div>
    );
  }
}

export default ApartmentList;
