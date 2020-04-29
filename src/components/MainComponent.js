import React, { Component } from "react";
import Header from "./Header";

import Home from "./HomeComponent";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSamples } from "../Redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    samples: state.samples, //state from reducer
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchSamples: () => {
    dispatch(fetchSamples());
  },
});

class MainCompo extends Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Home
            sample={this.props.samples.samples}
            samplesLoading={this.props.samples.isLoading}
            sampleErrMssg={this.props.samples.errMssg}
          />
        </div>
      );
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainCompo)
);
