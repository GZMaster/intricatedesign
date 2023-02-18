import React, { useEffect, useState } from "react";
import "./ProjectPage.scss";
import Nav from "../ServicesPage/Nav";
import Footer from "../../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import one from "../../assets/images/ProjectPage01.png";
import two from "../../assets/images/ProjectPage02.png";
import three from "../../assets/images/ProjectPage03.png";
import four from "../../assets/images/ProjectPage06.png";
import five from "../../assets/images/ProjectPage05.png";
import six from "../../assets/images/ProjectPage04.png";
import seven from "../../assets/images/ProjectPage07.png";
import eight from "../../assets/images/ProjectPage08.png";
import nine from "../../assets/images/ProjectPage09.png";
import ten from "../../assets/images/ProjectPage10.png";
import eleven from "../../assets/images/ProjectPage11.png";
import twelve from "../../assets/images/ProjectPage12.png";
import thirteen from "../../assets/images/ProjectPage13.png";
import fourteen from "../../assets/images/ProjectPage14.png";
import fifteen from "../../assets/images/ProjectPage15.png";
import sixteen from "../../assets/images/ProjectPage16.png";
import seventeen from "../../assets/images/ProjectPage17.png";
import eighteen from "../../assets/images/ProjectPage18.png";
import nineteen from "../../assets/images/ProjectPage19.png";
import twenty from "../../assets/images/ProjectPage20.png";
import twentyone from "../../assets/images/ProjectPage21.png";
import twentytwo from "../../assets/images/ProjectPage22.png";
import twentythree from "../../assets/images/ProjectPage23.png";
import twentyfour from "../../assets/images/ProjectPage24.png";
import twentyfive from "../../assets/images/ProjectPage25.png";
import twentysix from "../../assets/images/ProjectPage26.png";
import twentyseven from "../../assets/images/ProjectPage27.png";
import twentyeight from "../../assets/images/ProjectPage28.png";
import twentynine from "../../assets/images/ProjectPage29.png";
import thirty from "../../assets/images/ProjectPage30.png";
import thirtyone from "../../assets/images/ProjectPage31.png";
import thirtytwo from "../../assets/images/ProjectPage32.png";
import thirtythree from "../../assets/images/ProjectPage33.png";
import thirtyfour from "../../assets/images/ProjectPage34.png";
import thirtyfive from "../../assets/images/ProjectPage35.png";
import thirtysix from "../../assets/images/ProjectPage36.png";
import thirtyseven from "../../assets/images/ProjectPage37.png";
import thirtyeight from "../../assets/images/ProjectPage38.png";
import thirtynine from "../../assets/images/ProjectPage39.png";
import forty from "../../assets/images/ProjectPage40.png";

const ProjectPage = () => {
  const Images = [
    { id: 1, image: one },
    { id: 2, image: two },
    { id: 3, image: three },
    { id: 4, image: four },
    { id: 5, image: five },
    { id: 6, image: six },
    { id: 7, image: seven },
    { id: 8, image: eight },
    { id: 9, image: nine },
    { id: 10, image: ten },
    { id: 11, image: eleven },
    { id: 12, image: twelve },
    { id: 13, image: thirteen },
    { id: 14, image: fourteen },
    { id: 15, image: fifteen },
    { id: 16, image: sixteen },
    { id: 17, image: seventeen },
    { id: 18, image: eighteen },
    { id: 19, image: nineteen },
    { id: 20, image: twenty },
    { id: 21, image: twentyone },
    { id: 22, image: twentytwo },
    { id: 23, image: twentythree },
    { id: 24, image: twentyfour },
    { id: 25, image: twentyfive },
    { id: 26, image: twentysix },
    { id: 27, image: twentyseven },
    { id: 28, image: twentyeight },
    { id: 29, image: twentynine },
    { id: 30, image: thirty },
    { id: 31, image: thirtyone },
    { id: 32, image: thirtytwo },
    { id: 33, image: thirtythree },
    { id: 34, image: thirtyfour },
    { id: 35, image: thirtyfive },
    { id: 36, image: thirtysix },
    { id: 37, image: thirtyseven },
    { id: 38, image: thirtyeight },
    { id: 39, image: thirtynine },
    { id: 40, image: forty },
  ];
  const [showImages, setShowImages] = useState(Images.slice(0, 6));

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const handleShowMore = () => {
    setShowImages(Images);
  };

  const handleShowLess = () => {
    setShowImages(Images.slice(0, 6));
  };

  return (
    <>
      <Nav />
      <section
        className="projectpage__container"
        style={{ paddingTop: "4rem" }}
      >
        <div className="projectpage_wrapper">
          <div className="projectpage_title_wrapper">
            <div className="projectpage_title" data-aos="fade-up">
              PROJECT
            </div>
            <div
              className="projectpage_header"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Projects
            </div>
            <div
              className="projectpage_desc"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              At INTRICATE DESIGN SPACE, we specialize in designing spaces that
              are both visually appealing and practical. Browse through some of
              our recent projects to see the different styles and types of
              spaces we have transformed. Each project reflects the personal
              preferences of our clients. Below are some of the Services we
              offer: From completion of a carcass structure to remodeling and
              refurbishing here are some of the many services we offer our
              clients:
            </div>
          </div>
          <div className="projectpage_content_wrapper">
            {showImages.map((i) => {
              return (
                <div
                  className="projectpage_content"
                  key={i.id}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img src={i.image} alt="" />
                </div>
              );
            })}
          </div>
          {showImages.length !== Images.length ? (
            <button onClick={handleShowMore} className="projectpage_showmore">
              Show More
            </button>
          ) : (
            <button onClick={handleShowLess} className="projectpage_showmore">
              Show Less
            </button>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;
