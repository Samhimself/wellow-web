import React from "react";
import ServicesP1 from "./ServicesP1";
import ServicesP2 from "./ServicesP2";

function Services({classToAdd}) {
  return (
    <div className={"services " + classToAdd} id="services">
      <ServicesP1 />
      <ServicesP2 />
    </div>
  );
}

export default Services;
