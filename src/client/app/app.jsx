import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Config from './config/site';
import Connection from './services/connection/websocket';

import Home from './pages/home/Home';
import AICloudPage from './pages/ai-cloud/AICloud';
import UserGardenPage from './pages/my-garden/MyGarden';
import UserNetWorkPage from './pages/smile-city/SmileCity';

import SimplestLayout from './layouts/simplest/simplest';

import RouteConstants from './utils/RouteConstants';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  get isUserNetworkPage() {
    return window.location.pathname === RouteConstants.userNetworkPath;
  }

  constructor() {
    super();
    Connection.setup();
  }

  componentWillMount() {
    document.title = Config.WEBSITE_TITLE;
  }

  render() {
    const routes = (
      <React.Fragment>
        <Route exact path={RouteConstants.homePath} component={Home} />
        <Route exact path={RouteConstants.aiCloudPath} component={AICloudPage} />
        <Route exact path={RouteConstants.userGardensPath} component={UserGardenPage} />
        <Route exact path={RouteConstants.userNetworkPath} component={() => <></>} />
        <Redirect from="*" to={RouteConstants.homeLink} />
        {(this.isUserNetworkPage || window.myGoogleMap) && <UserNetWorkPage />}
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <SimplestLayout routes={routes} />
      </React.Fragment>
    );
  }
}

export default App;
