import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  console.log(services[0]);
  return (
    <div>
      {/* <a href="https://ibb.co/Kq0CJBg"></a> */}
      <img src={services[5].img} alt="percel" border="0" />
    </div>
  );
};

export default Home;
