import React from "react";
import Hero from "../../components/Hero/Hero";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import './Appointment.css'

const Appointment = () => {
  return (
    <>
      
        <img className="appoint" src="appoint.png" alt="error"/>
        <div className="overlay">
          <h1>Book Appointment</h1>
          <p>Convenient Appointment Scheduling</p>
          <p>Comprehensive Services</p>
          <p>Expert Medical Team</p>
          </div>
       
      <AppointmentForm/>

    </>
  );
};

export default Appointment;