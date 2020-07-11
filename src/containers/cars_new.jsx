import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.props.garageName, (car) => {
      this.props.history.push('/'); // Navigate after submit return car;
      return car;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <Sidebar>
          <Link to="/" className="btn btn-primary">
            Back to car list
          </Link>
        </Sidebar>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="main-content">
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Add Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
