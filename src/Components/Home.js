import React from "react";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
import Header from "./Header";
import { Widget } from '@typeform/embed-react'

const MyComponent = () => {
  return <Widget id="L30MTwVa" style={{ width: '50%' }} className="my-form" />
}

export default function Home() {
  return (
    <div className="home">
      <Header />
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
