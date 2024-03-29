import React from "react";
import "./Services.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services_container">
      <div className="services_title_wrapper" data-aos="fade-up">
        <h2 className="services_header">WHAT WE OFFER</h2>
        <h1 className="services_title" data-aos="fade-up" data-aos-delay="400">
          Below are some of the <span>services</span> we offer.
        </h1>
      </div>

      <div className="services_content_wrapper">
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="title">Completion of a carcass structure</div>
          <div className="box1" />

          <div className="desc">
            At our interior design firm, we understand that the foundation of
            any good design is a solid structure.
          </div>
          <HiArrowNarrowRight className="arrow_link" />
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="title">Furniture Refurbishing and set</div>
          <div className="box2" />
          <div className="desc">
            We offer a comprehensive furniture refurbishing and set service.
          </div>
          <HiArrowNarrowRight className="arrow_link" />
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="title">Building remodeling and redesign</div>
          <div className="box3" />
          <div className="desc">
            We provide building remodeling and redesign services to help you
            create a functional and aesthetically pleasing space.
          </div>
          <HiArrowNarrowRight className="arrow_link" />
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <div className="title">Office Furnishing and decor</div>
          <div className="box4" />
          <div className="desc">
            We specialize in helping businesses create workspaces that inspire
            creativity, productivity and a sense of well-being.
          </div>
          <HiArrowNarrowRight className="arrow_link" />
        </Link>
      </div>
    </section>
  );
};

export default Services;
