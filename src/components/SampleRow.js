import React from "react";

class SampleRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.products.Country}</td>
        <td>{this.props.products.WellName}</td>
        <td>{this.props.products.Wellcode}</td>
        <td>{this.props.products.Province}</td>
        <td />
        <td />
        <td>{this.props.products.ProspectBasin}</td>
        <td />
        <td>{this.props.products.SampleCode}</td>
        <td />
        <td>{this.props.products.SampleType}</td>
        <td>{this.props.products.Depthinterval}</td>
        <td>{this.props.products.Topdepth}</td>
        <td>{this.props.products.Basedepth}</td>
        <td>{this.props.products.Type}</td>
      </tr>
    );
  }
}

export default SampleRow;
