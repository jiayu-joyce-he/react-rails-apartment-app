import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getApartments , createApartment } from '../api'


import Home from './pages/Home'
import LogIn from './LogIn'
import NavBar from "./NavBar"
import ApartmentList from "./ApartmentList"
import Apartments from './Apartments'


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
    return (
      <Router>
        <NavBar />
        <Apartments />
				<Switch>
          <Route exact path="/" component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path="/apartments" render={( props) => <ApartmentList apartments={this.state.apartments}/> } />
				</Switch>

			</Router>
    );
  }
}

export default MainApp
