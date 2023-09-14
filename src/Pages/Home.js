import React from "react";
import {Swingappbar} from "../Components/bars/Swingappbar";
import { Landingimage } from "../Components/Landingcomponents/Landingimage";
import { Productcardcontainers } from "../Components/Landingcomponents/productcardcontainers";

const Home = ({switchmode}) => {
  return (
    <div>
      <Swingappbar switchmode={switchmode}/>
      <Landingimage />   
      <Productcardcontainers />
      </div>
  );
};

export {Home};
