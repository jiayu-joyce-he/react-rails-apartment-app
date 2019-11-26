import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getApartments , createApartment } from '../api'


import Home from './pages/Home'
import Apartments from './Apartments'
import LogIn from './LogIn'
import NavBar from "./NavBar"
import ApartmentList from "./ApartmentList"


class MainApp extends React.Component {
  constructor(props){
      super(props)
        this.state = {
          apartments: []
      }
    }

    handleNewApartment = (newApartmentInfo) => {
    	return createApartment(newApartmentInfo)
        .then(successApartment => {
            console.log("SUCCESS! New apartment: ", successApartment);
        }).then( e => {
            this.loadApartments()
        })


    }

      componentDidMount() {
          this.loadApartments()
      }

      loadApartments = () => {
          getApartments()
        	.then(APIApartments => {
        	  this.setState({
        		apartments: APIapartments
        	  })
          })
      }

  render () {
    return (
      <Router>
        <NavBar />
        <ApartmentList />
				<Switch>

          <Route exact path="/" component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path="/apartmentlist" render={( props) => <ApartmentList apartments={this.state.apartments}/> } />
				</Switch>
			</Router>
    );
  }
}

export default MainApp
