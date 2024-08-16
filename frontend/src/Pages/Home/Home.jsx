import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import MessageForm from "../../components/MessageForm/MessageForm";
import Departments from "../../components/Departments/Departments";
import HospitalsNearMe from "../../components/NearHospital/NearHospital";

const Home = () => {
  return (
    <>
      <Hero/>
      <Departments />
      <HospitalsNearMe />
      <MessageForm />
    </>
  );
};

export default Home;