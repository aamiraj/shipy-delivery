import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../../assets/images/1.jpg";
import Carousel2 from "../../assets/images/2.jpg";
import Carousel3 from "../../assets/images/3.webp";
import Service from "../../components/Service/Service";
import Stat from "../../components/Stats/Stats";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  const services = useLoaderData();

  return (
    <>
      <div id="carousel" className="my-8">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {/* carousel 1 */}
          <div
            key="content-0"
            className="sliderContainer flex flex-col md:flex-row justify-evenly items-center"
          >
            <div className="md:w-1/2 w-full">
              <img
                className="object-contain rounded-full"
                src={Carousel1}
                alt="carousel1"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="text-4xl md:text-8xl font-bold p-4">
                Deliver Something
              </h1>
              <h3 className="text-xl md:text-2xl font-medium p-1">
                Here we are to deliver your goods to your beloved ones,
                domestically to anywhere throughout Bangladesh.
              </h3>
              {/* <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
              Here you can find various topics on different subjects that are
              organized by our skillful instructors, you just have to choose.
            </p> */}
              <Link to="/services" className="btn bg-my-primary-outline my-4">
                P2P Deliver
              </Link>
            </div>
          </div>
          {/* carousel 2 */}
          <div
            key="content-2"
            className="sliderContainer flex flex-col md:flex-row justify-evenly items-center"
          >
            <div className="md:w-1/2 w-full">
              <img
                className="object-contain rounded-full"
                src={Carousel2}
                alt="carousel2"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="text-4xl md:text-8xl font-bold p-4">
                Deliver Abroad
              </h1>
              <h3 className="text-xl md:text-2xl font-medium p-1">
                We also deliver goods to abroad, as many as 120+ countries
                through our global partners.
              </h3>
              {/* <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
              Here you can find various topics on different subjects that are
              organized by our skillful instructors, you just have to choose.
            </p> */}
              <Link to="/services" className="btn bg-my-primary-outline my-4">
                Exprees Deliver
              </Link>
            </div>
          </div>
          {/* carousel 3 */}
          <div
            key="content-3"
            className="sliderContainer flex flex-col md:flex-row justify-evenly items-center    "
          >
            <div className="md:w-1/2 w-full">
              <img
                className="object-contain rounded-full"
                src={Carousel3}
                alt="carousel3"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="text-4xl md:text-8xl font-bold p-4">
                Need Warehouse
              </h1>
              <h3 className="text-xl md:text-2xl font-medium p-1">
                We provide a completely dedicated warehouse to store products
                for SME businessess.
              </h3>
              {/* <p className="text-lg md:text-xl font-normal p-6 mx-6 hidden md:block">
              Here you can find various topics on different subjects that are
              organized by our skillful instructors, you just have to choose.
            </p> */}
              <Link to="/services" className="btn bg-my-primary-outline my-4">
                Book One
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      {/* carousel section end here */}
      <div>
        <h1 className="text-4xl font-bold p-4 text-center">Featured</h1>
        <Featured service={services[0]}></Featured>
      </div>

      <div id="services" className="w-11/12 mx-auto my-8">
        <h1 className="text-4xl font-bold p-4 text-center">
          Services We Provide
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {services.map((serve) => (
            <Service key={serve._id} service={serve}></Service>
          ))}
        </div>
        <Link className=" btn bg-my-primary-outline" to="/services">
          See All
        </Link>
      </div>
      <div>
        <Stat></Stat>
      </div>
    </>
  );
};

export default Home;
