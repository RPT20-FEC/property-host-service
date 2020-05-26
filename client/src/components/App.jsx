import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Host from './Host.jsx';
import HostPage from './HostPage.jsx';
import SendMessage from './SendMessage.jsx';
import {GlobalStyle} from './styledComponents.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
      host: null
    }

    this.renderShortDesc = this.renderShortDesc.bind(this);
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount(){
    this.fetchData(this.props.id);
  }

  fetchData(id) {
    ajax({
      url: 'http://54.215.154.186/listings/' + id + '/hosts',
      type: 'GET',
      success: (data) => {
        this.renderShortDesc(data);
      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    })
  }

  renderShortDesc(data) {
    if (data.description && data.description.length > 180) {
      data.descShort = data.description.substr(0, 180);
    }
    if (data.duringStay && data.duringStay.length > 180) {
      data.duringStayLess = data.duringStay.substr(0, 180);
    }
    this.setState({
      host: data
    });
  }


  render() {

    return (
      <div className="main">
        <GlobalStyle />
        { this.state.host &&

        <Switch>
          <Route exact path='/:id'>
           <Host host={this.state.host} propertyId={this.props.id}/>
          </Route>
          <Route path='/:listingid/host-details/:id' component={HostPage} render={() => (window.location.href = "http://54.215.154.186")} />
          <Route path='/:id/send-message' component={() => {
    global.window && (global.window.location.href = 'http://54.215.154.186');
    return null;
    }} >
            <SendMessage name={this.state.host.name} responseTime={this.state.host.responseTime} />
          </Route>
        </Switch>
        }
      </div>
    )
  }
}

export default App;