import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import Biography from "../../components/Biography/Biography";
import MessageForm from "../../components/MessageForm/MessageForm";
import Departments from "../../components/Departments/Departments";

const Home = () => {
  return (
    <>
      <Hero/>
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;