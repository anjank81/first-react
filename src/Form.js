import React from "react";
import styles from "./Form.module.css";
import Input from "./Input.js";
import Label from "./Label";
import Select from "./Select";
import Textarea from "./Textarea";
export default class Form extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <form onsubmit="return validateform()">
          <Label>First Name</Label>
          <Input name="fname" placeholder="Your First name.."></Input>
          <br />
          <Label>Last Name</Label>
          <Input name="lname" placeholder="Your Last Name.."></Input>
          <br />
          <Label>Email</Label>
          <Input name="email" placeholder="Your Email.."></Input>
          <br />
          <Label>Phone Number</Label>
          <Input name="phone" placeholder="Your Phone Number.."></Input>
          <br />

          <Label>Country</Label>
          <Select name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </Select>
          <br />
          <Label>Description</Label>
          <Textarea name="desc" placeholder="Your Description"></Textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
