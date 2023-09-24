import React from "react";
import "../../styles/find-drone-form.css";
import "../../styles/find-drone-form.css";
import { Form, FormGroup } from "reactstrap";

const FinddroneForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

        <FormGroup className="form__group">
          <input type="text" placeholder="Address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Booking date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="booking__time"
            type="time"
            placeholder="Booking time"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__drone-btn">Find Drone</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FinddroneForm;