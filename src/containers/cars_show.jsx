import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar, deleteCar } from '../actions';

import Sidebar from './sidebar';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      const carID = this.props.match.params.id;
      this.props.fetchCar(carID);
    }
  }

  handleClick = () => {
    const carID = this.props.match.params.id;
    this.props.deleteCar(carID, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    const car = this.props.car;
    if (!car) {
      return (
        <div className="app loading">
          Loading...
        </div>
      );
    }
    return (
      <div className="app">
        <Sidebar>
          <Link to="/" className="btn btn-primary">
            Back to Cars
          </Link>
        </Sidebar>
        <div className="main-content">
          <h2>{car.brand} - {car.model}</h2>
          <p><strong>Owner: </strong>{car.owner}</p>
          <p><strong>Plate: </strong> {car.plate}</p>
          <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const paramsId = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(currentCar => currentCar.id === paramsId);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar, deleteCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
