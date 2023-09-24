
import React from 'react'
import droneData from "../assets/data/droneData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const DroneDetails = () => {
    const { slug } = useParams();

    const singleDroneItem = droneData.find((item) => item.droneName === slug);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [singleDroneItem]);
  
    return (
      <Helmet title={singleDroneItem.droneName}>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img src={singleDroneItem.imgUrl} alt="" className="w-100" />
              </Col>
  
              <Col lg="6">
                <div className="drone__info">
                  <h2 className="section__title">{singleDroneItem.droneName}</h2>
  
                  <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      ${singleDroneItem.price}.00 / Day
                    </h6>
  
                    <span className=" d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      ({singleDroneItem.rating} ratings)
                    </span>
                  </div>
  
                  <p className="section__description">
                    {singleDroneItem.description}
                  </p>
  
                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "4rem" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-roadster-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleDroneItem.model}
                    </span>
  
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-settings-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleDroneItem.description}
                    </span>
  
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-timer-flash-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleDroneItem.sku}
                    </span>
                  </div>
  
                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "2.8rem" }}
                  >
  
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-building-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleDroneItem.brand}
                    </span>
                  </div>
                </div>
              </Col>
  
              <Col lg="7" className="mt-5">
                <div className="booking-info mt-5">
                  <h5 className="mb-4 fw-bold ">Booking Information</h5>
                  <BookingForm />
                </div>
              </Col>
  
              <Col lg="5" className="mt-5">
                <div className="payment__info mt-5">
                  <h5 className="mb-4 fw-bold ">Payment Information</h5>
                  <PaymentMethod />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  };

export default DroneDetails