import React from "react"
import PropTypes from "prop-types"

class LogIn extends React.Component {
  render () {

    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props



    return (
      <React.Fragment>
        {logged_in &&
          <div>
            <a className="btn btn-outline-primary btn-lg my-2 my-sm-0" href={sign_out_route}>Sign Out</a>
            <a className="btn btn-primary btn-lg my-2 my-sm-0" href={sign_in_route}>My Listing</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a className="btn btn-primary btn-lg my-2 my-sm-0" href={sign_in_route}>Sign In</a>
          </div>
        }

      </React.Fragment>
    );
  }
}

export default LogIn
