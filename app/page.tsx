import HomePage from "./sections/ladingPage/Home";
import ServiceSection from "./sections/servicesV2/ServicesV2";

export default function Home() {
  return (
    <div className="pt-32 bg-gray-100">
      <HomePage/>
      <ServiceSection/>

     
    </div>
  );
}
