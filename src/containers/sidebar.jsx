import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="sidebar__title">{ this.props.garageName }</h1>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName
  };
}

export default connect(mapStateToProps)(Sidebar);
