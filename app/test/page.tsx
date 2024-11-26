import React from "react";

const TestPage = () => {
  return (
    <div className="pt-32 w-full max-w-6xl mx-auto bg-gray-100">
      <div className="bg-gray-100 w-40 h-screen"></div>
      <div className="bg-gray-100 w-full h-auto flex flex-col justify-center space-y-72">
        <div className="w-full h-16 relative block bg-gray-100">
          <h1 className="bg-gray-100 w-min text-nowrap text-6xl font-bold absolute top-0 left-0">
            Diseño Grafico
          </h1>
          <div className="bg-gradient-to-r from-gray-100 via-gray-100 to-transparent w-full h-16 text-nowrap text-6xl font-bold absolute text-transparent animation-sideFadeIn"></div>
        </div>

        <div className=" w-full h-16 relative block bg-gray-100">
          <h1 className="bg-gray-100 w-min text-nowrap text-6xl font-bold absolute top-0 left-0">
            Apps Mobiles
          </h1>
          <div className="bg-gradient-to-r from-gray-100 via-gray-100 to-transparent w-full h-16 text-nowrap text-6xl font-bold absolute text-transparent animation-sideFadeIn"></div>
        </div>

        <div className="w-full h-16 relative block bg-gray-100">
          <h1 className="bg-gray-100 w-min text-nowrap text-6xl font-bold absolute top-0 left-0">
            Desarrollo Web
          </h1>
          <div className="bg-gradient-to-r from-gray-100 via-gray-100 to-transparent w-full h-16 text-nowrap text-6xl font-bold absolute text-transparent animation-sideFadeIn"></div>
        </div>
      </div>
      <div className="bg-gray-100 w-40 h-screen"></div>
    </div>
  );
};

export default TestPage;
