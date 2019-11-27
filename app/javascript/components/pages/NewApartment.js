import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import NewApartment from "./pages/NewApartment"


class NewApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      success: false,
      form:{
        street_a: "",
        street_b: "",
        city: "",
        zipcode: "",
        state: "",
        country: "",
        contact_name: "",
        contact_number: "",
        contact_hour: ""
      }
    }
  }

  handleChange = () => {
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    const { form } = this.state
    this.props.handleNewApartment(form)
    .then( () => {
      this.setState({
        success: true,
        form:{
          street_a: "",
          street_b: "",
          city: "",
          zipcode: "",
          state: "",
          country: "",
          contact_name: "",
          contact_number: "",
          contact_hour: ""
        }
      })
    })
  }

  render() {
    return(
      <React.Fragment>
      <div className="new-profile-form">
        <h2>Create a New Apartment Listing</h2>
        <br />
        <label id="street_a">Street Name 1</label>
        <Form.Control
          type="text"
          name="street_a"
          onChange={this.handleChange}
          value={this.state.form.street_a}
          className = {this.state.form.street_a.length>0 ? "form-control is-valid" : "form-control"}
          />
          <label id="street_b">Street Name 1</label>
        <Form.Control
          type="text"
          name="street_b"
          onChange={this.handleChange}
          value={this.state.form.street_b}
          className = {this.state.form.street_b.length>0 ? "form-control is-valid" : "form-control"}
          />

        <label id="city">Street Name 1</label>
          <Form.Control
            type="text"
            name="city"
            onChange={this.handleChange}
            value={this.state.form.city}
            className = {this.state.form.city.length>0 ? "form-control is-valid" : "form-control"}
          />

        <label id="zipcode">Street Name 1</label>
          <Form.Control
            type="text"
            name="zipcode"
            onChange={this.handleChange}
            value={this.state.form.zipcode}
            className = {this.state.form.zipcode.length>0 ? "form-control is-valid" : "form-control"}
          />

          <label id="country">Street Name 1</label>
          <Form.Control
            type="text"
            name="country"
            onChange={this.handleChange}
            value={this.state.form.country}
            className = {this.state.form.country.length>0 ? "form-control is-valid" : "form-control"}
          />

          <label id="contact_name">Street Name 1</label>
          <Form.Control
            type="text"
            name="contact_name"
            onChange={this.handleChange}
            value={this.state.form.contact_name}
            className = {this.state.form.contact_name.length>0 ? "form-control is-valid" : "form-control"}
          />

          <label id="contact_number">Street Name 1</label>
          <Form.Control
            type="text"
            name="contact_number"
            onChange={this.handleChange}
            value={this.state.form.contact_number}
            className = {this.state.form.contact_number.length>0 ? "form-control is-valid" : "form-control"}
          />

          <label id="contact_hour">Street Name 1</label>
          <Form.Control
            type="text"
            name="contact_hour"
            onChange={this.handleChange}
            value={this.state.form.contact_hour}
            className = {this.state.form.contact_hour.length>0 ? "form-control is-valid" : "form-control"}
          />


      </div>

      </React.Fragment>
    )
  }
}

export default NewApartment
