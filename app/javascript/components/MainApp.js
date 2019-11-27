import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getApartments , createApartment } from '../api'


import Home from './pages/Home'
import NewApartment from './pages/NewApartment'
import LogIn from './LogIn'
import NavBar from "./NavBar"
import ApartmentList from "./ApartmentList"
import Header from './Header'


class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [],
      errors: null,
    }
    this.loadApartments()
  }

  handleNewApartment = (newApartmentInfo) => {
  	return createApartment(newApartmentInfo)
      .then(successApartment => {
          console.log("SUCCESS! New apartment: ", successApartment);
      }).then( e => {
          this.loadApartments()
      })
  }

  loadApartments = ()=>{
      getApartments()
      .then((response)=>{
        if(response.error){
           this.setState({errors: response.errors})
        }else{
          this.setState({apartments: response})
        }
      })
    }

  render () {
    const {
          logged_in,
          sign_in_route,
          sign_out_route,
          current_user_id
        } = this.props

    return (
      <Router>
        <NavBar current_user={this.props}/>
        <Header />
				<Switch>
          <Route path="/LogIn" exact component={LogIn} />
          <Route path="/" exact render={( props) => <ApartmentList apartments={this.state.apartments}/> } />
          <Route path="/new_apartment" render={( props) => <NewApartment handleNewApartment={this.handleNewApartment} /> } />
				</Switch>
			</Router>
    );
  }
}

export default MainApp
