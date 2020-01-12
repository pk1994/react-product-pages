import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter.value
    };
    console.log("constructor");
    this.increase = this.increase.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    console.log("render");

    return (
      <div>
        <span className={this.getBadgeColor()}>{this.state.count}</span>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          {" "}
          Delete
        </button>
      </div>
    );
  }

  increase() {
    let count1 = this.state.count;
    this.setState({ count: count1 + 1 });
  }
  decrease = () => {
    let count1 = this.state.count;
    this.setState({ count: count1 - 1 });
  };

  getBadgeColor() {
    let classes = "badge m-2 badge-";
    //classes += this.state.count < 0 ? "warning" : "primary";
    if (this.state.count > 0) {
      classes += "primary";
    } else if (this.state.count < 0) {
      classes += "danger";
    } else {
      classes += "warning";
    }
    return classes;
  }
}

export default Counter;
