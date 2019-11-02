import React, { Component } from "react";
import style from "./Form.module.css";
class Label extends Component {
  render() {
    return <label className={style.label}>{this.props.children}</label>;
  }
}

export default Label;
