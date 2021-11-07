import React from "react";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
import { Widget } from '@typeform/embed-react'

const MyComponent = () => {
  return <Widget id="L30MTwVa" style={{ width: '50%' }} className="my-form" />
}

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <div>
          <div>
            <img src="/images/iwojima.png" alt="Iwo Jima" />
          </div>
        </div>
        <div>
          <div>Opportunity</div>
          <div>Explore</div>
          <div>Apply</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        <InfoCard title="Veteran" info="lorem ipsum" />
        <InfoCard title="Active Duty" info="lorem ipsum" />
        <InfoCard title="Reserve" info="lorem ipsum" />
        <InfoCard title="Non-Veteran" info="lorem ipsum" />
      </div>

      <MyComponent/>

      <Footer />
    </div>
  );
}
