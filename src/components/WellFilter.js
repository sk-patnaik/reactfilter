import React, { Component, Fragment } from "react";

class WellFilter extends Component {
  static propTypes = {};

  static defaultProps = {
    suggestions: [],
  };
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };
  }
  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const regex = new RegExp(`^${userInput}`, "i");

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter((suggestion) =>
      regex.test(suggestion)
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
      name: e.currentTarget.name,
    });
  };

  onClick = (e) => {
    console.log("Inside onClick" + e.currentTarget.innerText);
    const value = e.currentTarget.innerText;

    console.log("Value inside handlechange" + this.state.userInput);
    const name = this.state.name;
    console.log("Name inside handlechange" + name);

    this.props.onFilter({
      [name]: value,
    });
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  render() {
    const {
      onChange,
      onClick,

      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return (
      <form>
        <p>
          <h6>Well</h6>
        </p>
        <input
          type="text"
          onChange={onChange}
          value={userInput}
          name="filterText1"
        />
        {suggestionsListComponent}
      </form>
    );
  }
}

export default WellFilter;
