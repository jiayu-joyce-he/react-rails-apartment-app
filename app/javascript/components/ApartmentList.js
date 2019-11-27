import React, { Component } from 'react'

class ApartmentList extends Component {
  render() {
    return (
      <div className = "apartment-cards-container">
        {this.props.apartments.map((apartment, index) =>{
          return (
            <div className = "apartment-card">
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
                     <a href="#" class="card-link">Save</a>
                     <a href="#" class="card-link">Delete</a>
                   </div>
                   <div className="card-footer text-muted">
                     {`Posted at ${apartment.created_at.split("").slice(0,10).join("")}`}
                   </div>
                </div>
                </div>
              )
            }
          )
        }
		</div>
    );
  }
}

export default ApartmentList;
