import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/drone-item.css";

const CarItem = (props) => {
  const { imgUrl, model, droneName, price, SKU, description } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="drone__item">
        <div className="drone__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="drone__item-content mt-4">
          <h4 className="section__title text-center">{droneName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="drone__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {SKU}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {description}
            </span>
          </div>

          <button className=" w-50 drone__item-btn drone__btn-rent">
            <Link to={`/drones/${droneName}`}>Rent</Link>
          </button>

          <button className=" w-50 drone__item-btn drone__btn-details">
            <Link to={`/drones/${droneName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;