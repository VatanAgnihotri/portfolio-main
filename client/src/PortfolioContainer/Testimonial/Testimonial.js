import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import shape from "../../../src/img/Testimonial/shape-bg.png";

const ResumeHeading = (props) => (
  <div className="resume-heading" style={{ marginBottom: "10px" }}>
    <div className="resume-main-heading">
      <span>{props.heading ? props.heading : ""}</span>
    </div>
    <div className="resume-sub-heading">
      <span style={{ color: "tomato" }}>
        Code:
        <a href={props.repo} target="_blank">
          {" "}
          Click here to Check Out
        </a>
      </span>
    </div>
    {props.site && (
      <div className="resume-sub-heading">
        <span style={{ color: "tomato" }}>
          Website:
          <a href={props.site} target="_blank">
            {" "}
            Click here to Check Out
          </a>
        </span>
      </div>
    )}
  </div>
);

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"What I have developed so far"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <ResumeHeading
                      heading={"Delivery Management System"}
                      repo="https://github.com/VatanAgnihotri/Courier-Management"
                    />
                    <p>
                      <i className="fa fa-quote-left" />
                      It is a shipment management system which provides you the
                      shpiment details including source, destination ETA etc. It
                      also calculates the ETA status whether the shipment is on
                      time or late based on the last pinged time. Some
                      functionalities added to this project are, trip data
                      table, sorting, add trip form, update trip status form,
                      table data filter based on different shipment status etc.
                      Tech used are: React, MUI Material, Firebase, Docker,
                      useContext.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <ResumeHeading
                      heading={"Trip Inquiry and Management System"}
                      repo="https://github.com/VatanAgnihotri/travelopia_project"
                    />
                    <p>
                      <i className="fa fa-quote-left" />
                      It is a trips Inquiry raise and management system. Where
                      user can raise inquiries for different trips and admins or
                      the company can look into these inquiries to respond
                      appropriately. It consists for 2 main flows - user and
                      admin flow where users can only raise the inquiries and
                      cannot access the admin flow whereas admins can login and
                      check all the inquires raised by the users. Tech used is:
                      React, Node, MongoDB, Express, Server Side Rendering.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <ResumeHeading
                      heading={"E Signature Application"}
                      repo="https://github.com/VatanAgnihotri/signature_pad"
                      site="https://easysign-74771.firebaseapp.com/"
                    />
                    <p>
                      <i className="fa fa-quote-left" />
                      It is a simple Signature Application. As these days, there
                      are no free E-Signature websites available, I had created
                      this application for my of Lawyer friend who has to work a
                      lot with the E-Signatures and ususally he was spending
                      money to create those. These days, it is being used by
                      some Lawyers and CA. Technologies used: React, Tailwind
                      CSS, Firebase Hosting.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
