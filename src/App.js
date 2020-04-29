import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import MainCompo from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainCompo />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
