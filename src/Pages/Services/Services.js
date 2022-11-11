import React, { useContext, useEffect, useState } from "react";
import Service from "../../components/Service/Service";
import { AuthContext } from "../../contexts/UserContext";
import { Oval } from "react-loader-spinner";

const Services = () => {
  const { isLoading, setLoading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/services`)
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => setServices(data));
  }, [services, setLoading]);

  return (
    <div>
      {isLoading && (
        <div className="w-16 absolute top-1/2 left-1/2">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      <div id="services" className="w-11/12 mx-auto my-8">
        <h1 className="text-4xl font-bold p-4 text-center">
          Services We Provide
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((serve) => (
            <Service key={serve._id} service={serve}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
