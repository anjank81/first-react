import React, { Component } from "react";
import style from "./Form.module.css";

class Input extends Component {
  render() {
    return (
      <input
        type="textbox"
        name={this.props.name}
        placeholder={this.props.placeholder}
        className={style.input}
      ></input>
    );
  }
}

export default Input;
