import React, { Component } from "react";
import style from "./Form.module.css";

class Select extends Component {
  render() {
    return (
      <select name={this.props.name} className={style.select}>
        {this.props.children}
        {this.props.value}
      </select>
    );
  }
}

export default Select;
