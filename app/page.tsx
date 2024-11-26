import HomePage from "./sections/ladingPage/Home";
import Services from "./sections/services/Services";

export default function Home() {
  return (
    <div className="pt-32 bg-gray-100">
      <HomePage/>

      <Services/>
    </div>
  );
}
