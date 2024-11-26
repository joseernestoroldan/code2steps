import React from "react";

const Services = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-100">
      <div className="bg-gray-100 w-full h-auto flex flex-col justify-center space-y-20">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400 text-center text-6xl font-bold animation-fadeIn">
          Our Services
        </h1>
        <div className="w-full h-16 relative block bg-gray-100">
          <h2 className="text-transparent animation-fadeIn bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400 w-min text-nowrap text-5xl font-bold absolute top-0 left-0">
            Diseño Grafico
          </h2>
        </div>

        <div className="w-full h-24 relative block bg-gray-100">
          <p className="text-sky-900 w-full text-2xl font-bold absolute top-0 left-0 indent-12 animation-fadeIn text-justify">
            Transformamos tus ideas en diseños personalizados que cautivan a tu
            audiencia y fortalecen tu marca en el mercado digital.
          </p>
        </div>

        <div className=" w-full h-16 relative block bg-gray-100">
          <h2 className="text-transparent animation-fadeIn bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400 w-min text-nowrap text-5xl font-bold absolute top-0 left-0">
            Apps Mobiles
          </h2>
        </div>
        <div className="w-full h-24 relative block bg-gray-100">
          <p className="text-sky-900 w-full text-2xl font-bold absolute top-0 left-0 indent-12 animation-fadeIn text-justify">
            Diseñamos interfaces móviles intuitivas y atractivas que cautivan a
            tus usuarios. Transformamos tus ideas en experiencias digitales
            inolvidables.
          </p>
        </div>

        <div className="w-full h-16 relative block bg-gray-100">
          <h2 className="text-transparent animation-fadeIn bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400 w-min text-nowrap text-5xl font-bold absolute top-0 left-0">
            Desarrollo Web
          </h2>
        </div>
        <div className="w-full h-24 relative block bg-gray-100">
          <p className="text-sky-900 w-full text-2xl font-bold absolute top-0 left-0 indent-12 animation-fadeIn">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad optio
            autem libero recusandae aliquid soluta alias porro laboriosam
            praesentium consequuntur molestias, atque ipsa, minus at.
          </p>
        </div>
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
};

export default Services;
