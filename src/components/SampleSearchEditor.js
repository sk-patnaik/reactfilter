import React, { Component } from "react";
import CountryFilter from "./CountryFilter.js";

import CheckboxContainer from "./CheckBoxes/DatabaseCheckboxes/CheckboxContainer";

import WellFilter from "./WellFilter";
import SampleFilter from "./SampleFilter";
import SampleDisplayTable from "./SampleDisplayTable.js";

class SampleSearchEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      filterText1: "",
      filterText2: "",
      CHEMICAL: "",
      GAS: "",
      MUD: "",
      OIL: "",
      RECENT: "",
      ROCK: "",
      SOLID: "",
      TRACK: "",
      WATER: "",
      OTHER: "",
      product: this.props.products,
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(userInput) {
    console.log("filterInput insde handleFilter" + userInput);
    this.setState(userInput);
  }
  removeDuplicates() {
    //let productsAsArray = Object.(this.state.product.Country);
    //const uniqueSet = new Set(productsAsArray);
    //const backToArray = [...uniqueSet];
    // return backToArray;
  }
  render() {
    var DupCountries = [];
    var Countries = [];
    var Wells = [];
    var Samples = [];

    this.state.product.forEach((item) => {
      DupCountries.push(item.Country);
      ////for country
      const uniqueSet = new Set(DupCountries);
      Countries = [...uniqueSet];

      Wells.push(item.WellCode);
      Samples.push(item.SampleCode);
    });
    return (
      <div>
        <CountryFilter
          filterText={this.state.filterText}
          onFilter={this.handleFilter}
          suggestions={Countries}
        ></CountryFilter>
        <WellFilter
          filterText1={this.state.filterText1}
          onFilter={this.handleFilter}
          suggestions={Wells}
        ></WellFilter>
        <SampleFilter
          filterText2={this.state.filterText2}
          onFilter={this.handleFilter}
          suggestions={Samples}
        ></SampleFilter>
        <CheckboxContainer
          onFilter={this.handleFilter}
          GAS={this.state.GAS}
          CHEMICAL={this.state.CHEMICAL}
          MUD={this.state.MUD}
          OIL={this.state.OIL}
          RECENT={this.state.RECENT}
          ROCK={this.state.ROCK}
          SOLID={this.state.SOLID}
          TRACK={this.state.TRACK}
          WATER={this.state.WATER}
          OTHER={this.state.OTHER}
        />
        <SampleDisplayTable
          products={this.state.product}
          filterText={this.state.filterText}
          filterText1={this.state.filterText1}
          filterText2={this.state.filterText2}
          GAS={this.state.GAS}
          CHEMICAL={this.state.CHEMICAL}
          MUD={this.state.MUD}
          OIL={this.state.OIL}
          RECENT={this.state.RECENT}
          ROCK={this.state.ROCK}
          SOLID={this.state.SOLID}
          TRACK={this.state.TRACK}
          WATER={this.state.WATER}
          OTHER={this.state.OTHER}
        />
      </div>
    );
  }
}

export default SampleSearchEditor;
