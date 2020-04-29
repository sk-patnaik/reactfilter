import React from "react";

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    console.log("Inside checkbox name" + name);
    console.log("Inside checkbox value" + value);

    this.props.onFilter({
      [name]: name,
    });
  }

  render() {
    return (
      <form>
        <br />
        <h5>DataBases</h5>
        <br />
        <div class="checkbox">
          <label for="Check1">
            <input
              type="checkbox"
              id="Check1"
              name="Check1"
              checked={this.state.checkedItems.get("Check1")}
              onChange={this.handleChange}
            />
            <span> FPC </span>
          </label>

          <label for="Check2">
            <input
              type="checkbox"
              id="Check2"
              name="Check2"
              checked={this.state.checkedItems.get("Check2")}
              onChange={this.handleChange}
            />
            <span>FA</span>
          </label>
          <br />
          <h5>Sample Filter</h5>
          <br />
          <label for="Check3">
            <input
              type="checkbox"
              id="Check3"
              name="CHEMICAL"
              checked={this.state.checkedItems.get("Check3")}
              onChange={this.handleChange}
            />
            <span>Chemical</span>
          </label>
          <label for="Check4">
            <input
              type="checkbox"
              id="Check4"
              name="GAS"
              checked={this.state.checkedItems.get("Check4")}
              onChange={this.handleChange}
            />
            <span>Gas</span>
          </label>
          <label for="Check5">
            <input
              type="checkbox"
              id="Check5"
              name="MUD"
              checked={this.state.checkedItems.get("Check5")}
              onChange={this.handleChange}
            />
            <span>Mud</span>
          </label>
          <label for="Check6">
            <input
              type="checkbox"
              id="Check6"
              name="OIL"
              checked={this.state.checkedItems.get("Check6")}
              onChange={this.handleChange}
            />
            <span>Oil</span>
          </label>
          <label for="Check7">
            <input
              type="checkbox"
              id="Check6"
              name="RECENT"
              checked={this.state.checkedItems.get("Check7")}
              onChange={this.handleChange}
            />
            <span>Recent</span>
          </label>
          <label for="Check8">
            <input
              type="checkbox"
              id="Check7"
              name="ROCK"
              checked={this.state.checkedItems.get("Check8")}
              onChange={this.handleChange}
            />
            <span>Rock</span>
          </label>
          <label for="Check9">
            <input
              type="checkbox"
              id="Check8"
              name="SOLID"
              checked={this.state.checkedItems.get("Check9")}
              onChange={this.handleChange}
            />
            <span>Solid</span>
          </label>
          <label for="Check10">
            <input
              type="checkbox"
              id="Check9"
              name="TRACK"
              checked={this.state.checkedItems.get("Check10")}
              onChange={this.handleChange}
            />
            <span>Track</span>
          </label>
          <label for="Check11">
            <input
              type="checkbox"
              id="Check10"
              name="WATER"
              checked={this.state.checkedItems.get("Check11")}
              onChange={this.handleChange}
            />
            <span>Water</span>
          </label>
          <label for="Check12">
            <input
              type="checkbox"
              id="Check11"
              name="OTHER"
              checked={this.state.checkedItems.get("Check12")}
              onChange={this.handleChange}
            />
            <span>Other</span>
          </label>
        </div>
      </form>
    );
  }
}
export default CheckboxContainer;
