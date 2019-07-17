import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerWithInfo from '../marker-with-info/MarkerWithInfo';

import { ShoppingCartSrc } from '../../../assets/icons';

export default class UserMarker extends Component {
  get marker() {
    return this.markerRef.current;
  }

  constructor(props) {
    super(props);

    this.markerRef = React.createRef();
    this.onStartConversation = this.onStartConversation.bind(this);
  }

  open() {
    this.marker.open();
  }

  close() {
    this.marker.close();
  }

  toggle() {
    this.marker.toggle();
  }

  onStartConversation() {
    alert(`Hello Guy! I'm ${this.props.name}`);
  }

  render() {
    const { name } = this.props;
    return (
      <MarkerWithInfo ref={this.markerRef} {...this.props}>
        <div>
          <h4>My name is {name}</h4>
          <button type="button" onClick={this.onStartConversation}>Chat To {name}</button>
        </div>
      </MarkerWithInfo>
    );
  }
}

UserMarker.propTypes = {
  iconSrc: PropTypes.string
};

UserMarker.defaultProps = {
  iconSrc: ShoppingCartSrc
};
