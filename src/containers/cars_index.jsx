import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Sidebar from './sidebar';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <li className="car-list-item" key={car.id}>
          <Link to={`/cars/${car.id}`} className="car-list-item__link" />
          <h3>{car.brand} - {car.model}</h3>
          <p><strong>Owner:</strong> {car.owner}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Sidebar>
          <Link to="/cars/new" className="btn btn-primary">
            Add A Car
          </Link>
        </Sidebar>
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
