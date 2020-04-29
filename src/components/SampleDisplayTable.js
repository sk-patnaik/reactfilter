import React from "react";

//import Table from "./Table";
import DisplayTable from "./TableComponents/DisplayTable";

class SampleDisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);

    this.state = {
      sort: {
        column: "name",
        direction: "desc",
      },
    };
  }
  sortByKeyAndOrder(objectA, objectB) {
    let isDesc = this.state.sort.direction === "desc" ? 1 : -1;
    let [a, b] = [
      objectA[this.state.sort.column],
      objectB[this.state.sort.column],
    ];
    if (this.state.sort.column === "price") {
      [a, b] = [a, b].map((value) =>
        parseFloat(value.replace(/[^\d\.]/g, ""), 10)
      );
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map(
      (pid) => this.props.products[pid]
    );
    return productsAsArray;
  }

  render() {
    var rows = [];
    this.props.products.forEach((product) => {
      if (
        product.Country.indexOf(this.props.filterText) === -1 ||
        product.WellCode.indexOf(this.props.filterText1) === -1 ||
        product.SampleCode.indexOf(this.props.filterText2) === -1 ||
        product.Type.indexOf(this.props.GAS) === -1 ||
        product.Type.indexOf(this.props.CHEMICAL) === -1 ||
        product.Type.indexOf(this.props.MUD) === -1 ||
        product.Type.indexOf(this.props.OIL) === -1 ||
        product.Type.indexOf(this.props.RECENT) === -1 ||
        product.Type.indexOf(this.props.ROCK) === -1 ||
        product.Type.indexOf(this.props.SOLID) === -1 ||
        product.Type.indexOf(this.props.TRACK) === -1 ||
        product.Type.indexOf(this.props.WATER) === -1 ||
        product.Type.indexOf(this.props.OTHER) === -1
      ) {
        return;
      }

      console.log("outside if loop sample" + this.props.filterText);
      rows.push({
        id: product.id,
        Country: product.Country,
        WellName: product.WellName,
        WellCode: product.WellCode,
        Province: product.Province,
        ProspectBasin: product.ProspectBasin,
        SampleCode: product.SampleCode,
        SampleType: product.SampleType,
        Type: product.Type,
        Depthinterval: product.Depthinterval,
        Topdepth: product.Topdepth,
        Basedepth: product.Basedepth,
      });
    });

    return (
      <div>
        <br />
        <DisplayTable data={rows} />
      </div>
    );
  }
}

export default SampleDisplayTable;
