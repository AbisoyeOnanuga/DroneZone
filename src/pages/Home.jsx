

import React from 'react'
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container } from "reactstrap";

import { Row,Col } from 'reactstrap'
import FindCarForm from "../components/UI/FindDroneForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import droneData from "../assets/data/droneData";
import DroneItem from "../components/UI/DroneItem";


const Home = () => {
    return (
        <Helmet title="Home">
        {/* ============= hero section =========== */}
        <section className="p-0 hero__slider-section">
          <HeroSlider />
  
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__drones-left">
                    <h2>Find your next drone here</h2>
                  </div>
                </Col>
  
                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* =========== about section ================ */}
        <AboutSection />
        {/* ========== services section ============ */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">See our</h6>
                <h2 className="section__title">Popular Services</h2>
              </Col>
  
              <ServicesList />
            </Row>
          </Container>
        </section>
        {/* =========== drone offer section ============= */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle"></h6>
                <h2 className="section__title">Rental Offers</h2>
              </Col>
  
              {droneData.slice(0, 6).map((item) => (
                <DroneItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>

      </Helmet>
    );
  };

export default Home