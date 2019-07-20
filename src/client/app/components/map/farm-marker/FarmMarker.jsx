import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerWithInfo from '../marker-with-info/MarkerWithInfo';
import './FarmMarker.scss';

import { FarmSrc } from '../../../assets/icons';

const CUSTOM_CLASS = 'farm';
const CUSTOM_MARKER_CLASS = `${CUSTOM_CLASS}-marker`;
const CUSTOM_WINDOW_CLASS = `${CUSTOM_CLASS}-info-window`;


export default class SupplierMarker extends Component {
  get uid() {
    return this.marker.uid;
  }

  constructor(props) {
    super(props);
    this.marker = null;
    this.onLoad = this.onLoad.bind(this);
    this.onStartConversation = this.onStartConversation.bind(this);
  }

  onLoad(ref) {
    this.marker = ref;
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
      <MarkerWithInfo
        ref={this.onLoad}
        {...this.props}
        onOpen={this.onOpen}
        customMarkerClass={CUSTOM_MARKER_CLASS}
        customWindowClass={CUSTOM_WINDOW_CLASS}
      >
        <h4>Nông trại {name}</h4>
      </MarkerWithInfo>
    );
  }
}

SupplierMarker.propTypes = {
  iconSrc: PropTypes.string
};

SupplierMarker.defaultProps = {
  iconSrc: FarmSrc
};
