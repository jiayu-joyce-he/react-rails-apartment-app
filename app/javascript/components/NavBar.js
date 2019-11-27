import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink } from 'reactstrap'
import {Link} from 'react-router-dom';


class NavBar extends React.Component {

  constructor(props) {
          super(props)
          this.state = {
              navbarClassName: true,
              expanded: false,
              navbarDivClassName: true
          }
      }

  handleClick = (e) => {
      e.preventDefault();
      this.setState((state) => {
          return {
              navbarClassName: !this.state.navbarClassName,
              expanded: !this.state.expanded,
              navbarDivClassName: !this.state.navbarDivClassName
          }
      })
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Appartment App</Link>
        <button className={this.state.navbarClassName ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded={this.state.expanded ? "false" : "true"} aria-label="Toggle navigation" onClick={this.handleClick}>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.state.navbarDivClassName ? "navbar-collapse collapse" : "navbar-collapse collapse show"} id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="./new_apartment">List New Aparment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./apartments">Apartment Listing</Link>
                </li>
                {!this.props.current_user.logged_in &&
                  <li className="nav-item">
                      <a className="btn btn-primary" href="/users/sign_in">Sign In</a>
                  </li>
                }

                {this.props.current_user.logged_in &&
                  <li className="nav-item">
                    <a className="nav-link" href={this.props.current_user.sign_in_route}>My Listing</a>
                  </li>
                }
                {this.props.current_user.logged_in &&
                  <li className="nav-item">
                    <a className="nav-link" href={this.props.current_user.sign_out_route}>Sign Out</a>
                  </li>
                }
            </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar
