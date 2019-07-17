import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerWithInfo from '../marker-with-info/MarkerWithInfo';
import './DistributorMarker.scss';

import { ShoppingCartSrc } from '../../../assets/icons';

export default class DistributorMarker extends Component {
  get marker() {
    return this.markerRef.current;
  }

  constructor(props) {
    super(props);

    this.markerRef = React.createRef();
    this.onBuy = this.onBuy.bind(this);
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

  onBuy() {
    alert(`Hello Guy! I'm ${this.props.name}`);
  }

  render() {
    const { name } = this.props;
    return (
      <MarkerWithInfo ref={this.markerRef} {...this.props}>
        <div className="store-branding">Cửa hàng {name}</div>
        <img className="store-eaves" src="/images/eaves.png" alt="" />
        <div className="store-body">
          Danh mục sản phẩm
          <div className="row mx-0">
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
            <div className="col p-3 text-center">
              <button type="button" className="btn btn-sm btn-success px-3" onClick={this.onBuy}>miễn phí</button>
            </div>
          </div>
        </div>
      </MarkerWithInfo>
    );
  }
}

DistributorMarker.propTypes = {
  iconSrc: PropTypes.string
};

DistributorMarker.defaultProps = {
  iconSrc: ShoppingCartSrc
};
