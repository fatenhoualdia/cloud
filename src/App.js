import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";

import "./App.css";
import Location from "./components/Location/Location";

export const location = {
  address: "place pasteur gafsa, 2143",
  lat: 34.42021104141775,
  lng: 8.792319680919665,
};
function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <DisclaimerSection />
      <Location />
      <FooterSection />
    </div>
  );
}

export default App;
