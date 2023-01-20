import React from "react";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Filter></Filter>
      <Card></Card>
    </div>
  );
};

export default Home;
