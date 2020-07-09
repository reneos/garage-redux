import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';


class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <li className="car-list-item" key={car.plate}>
          <h3>{car.brand} - {car.model}</h3>
          <p><strong>Owner:</strong> {car.owner}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <h1>{this.props.garageName}</h1>
          <Link to="/cars/new">
            Add A Car
          </Link>
        </div>
        <div className="main-content">
          <ul className="car-list">
            {this.renderCars()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName,
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
