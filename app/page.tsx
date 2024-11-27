import About from "./sections/about/About";
import Bottom from "./sections/bottom/Bottom";
import HomePage from "./sections/ladingPage/Home";
import ServiceSection from "./sections/services/Services";

export default function Home() {
  return (
    <div className="pt-32 bg-gray-100">
      <HomePage/>
      <ServiceSection/>
      <About/>
      <Bottom/>

     
    </div>
  );
}
