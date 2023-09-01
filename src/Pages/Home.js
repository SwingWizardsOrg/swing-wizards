import React from "react";
import {Swingappbar} from "../Components/bars/Swingappbar";
import {ProductCard} from "../Components/Cards/Productcard";
import styles from  "../Components/css/Home.module.css"
import { Box } from "@mui/material";
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
