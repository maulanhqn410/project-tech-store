import React from 'react';
import Hero from '../components/Hero';
import contactBcg from "../img/contactBcg.jpeg";
import Contact from '../components/contactPage/Contact';
export default function ContactPage() {
  return (
    <>
      <Hero img={contactBcg}/>
      <Contact />
    </>
  )
}