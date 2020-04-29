/* eslint max-len: 0 */
import React from "react";
import ReactDOM from "react-dom";
import {
  BootstrapTable,
  TableHeaderColumn,
  ButtonGroup,
} from "react-bootstrap-table";

//cell edition
const cellEditProp = {
  mode: "click",
  blurToSave: true,
};
//cell edition end
function onAfterDeleteRow(rowKeys, rows) {
  alert("The rowkey you drop: " + rowKeys);
}

const deleteOptions = {
  afterDeleteRow: onAfterDeleteRow, // A hook for after droping rows.
};
//delete row end

class Checkbox extends React.Component {
  componentDidMount() {
    this.update(this.props.checked);
  }
  componentWillReceiveProps(props) {
    this.update(props.checked);
  }
  update(checked) {
    ReactDOM.findDOMNode(this).indeterminate = checked === "indeterminate";
  }
  render() {
    return (
      <input
        className="react-bs-select-all"
        type="checkbox"
        name={"checkbox" + this.props.rowIndex}
        id={"checkbox" + this.props.rowIndex}
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}
export default class SortTable extends React.Component {
  //Button group
  createCustomButtonGroup = (props) => {
    return (
      <ButtonGroup className="my-custom-class" sizeClass="btn-group-md">
        {props.showSelectedOnlyBtn}
        {props.exportCSVBtn}
        {props.insertBtn}
        {props.deleteBtn}
        <button type="button" className={`btn btn-primary`}>
          MyCustomBtn
        </button>
      </ButtonGroup>
    );
  };
  //Button group end

  customMultiSelect(val) {
    const { type, checked, disabled, onChange, rowIndex } = val;
    /*
     * If rowIndex is 'Header', means this rendering is for header selection column.
     */
    if (rowIndex === "Header") {
      return (
        <div className="checkbox-personalized">
          <Checkbox {...val} />
          <label htmlFor={"checkbox" + rowIndex}>
            <div className="check"></div>
          </label>
        </div>
      );
    } else {
      return (
        <div className="checkbox-personalized">
          <input
            type={type}
            name={"checkbox" + rowIndex}
            id={"checkbox" + rowIndex}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e, rowIndex)}
            ref={(input) => {
              if (input) {
                input.indeterminate = val.indeterminate;
              }
            }}
          />
          <label htmlFor={"checkbox" + rowIndex}>
            <div className="check"></div>
          </label>
        </div>
      );
    }
  }

  //export CSV

  //export csv end

  onExportToCSV = () => {
    const selectedRows = this.refs.table.state.selectedRowKeys;
    return this.props.data.filter((prod) => {
      if (selectedRows.indexOf(prod.id) > -1) {
        return prod;
      }
    });
  };
  render() {
    const selectRowProp = {
      mode: "checkbox",
      customComponent: this.customMultiSelect,
    };
    const testcsv = {
      onExportToCSV: this.onExportToCSV,
    };
    const CustomToolBaroptions = {
      toolBar: this.createCustomToolBar,
    };

    return (
      <div
        style={{
          position: "absolute",
          left: "90%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BootstrapTable
          ref="table"
          data={this.props.data}
          selectRow={selectRowProp}
          pagination
          striped={true}
          hover={true}
          optiondelete={deleteOptions}
          CustomToolBaroptions={CustomToolBaroptions}
          insertRow
          deleteRow
          options={testcsv}
          exportCSV
          search
          cellEdit={cellEditProp}
        >
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Country" width="5" dataSort={true}>
            Country
          </TableHeaderColumn>

          <TableHeaderColumn dataField="WellName" width="10px" dataSort={true}>
            WellName
          </TableHeaderColumn>

          <TableHeaderColumn dataField="Province" width="20px" dataSort={true}>
            Province
          </TableHeaderColumn>
          <TableHeaderColumn dataField="ProspectBasin" dataSort={true}>
            ProspectBasin
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="SampleCode"
            width="100px"
            dataSort={true}
          >
            SampleCode
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="SampleType"
            width="100px"
            dataSort={true}
          >
            SampleType
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Type" width="80px" dataSort={true}>
            Type
          </TableHeaderColumn>

          <TableHeaderColumn dataField="Topdepth" width="80px" dataSort={true}>
            Topdepth
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="Basedepth"
            width="100px"
            dataSort={true}
          >
            Basedepth
          </TableHeaderColumn>
          <TableHeaderColumn dataField="WellCode" width="5" dataSort={true}>
            WellCode
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
