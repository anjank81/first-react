import React, { Component } from "react";
import style from "./Form.module.css";
class Textarea extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        placeholder={this.props.placeholder}
        className={style.textarea}
      ></textarea>
    );
  }
}

export default Textarea;
