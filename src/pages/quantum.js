import React from 'react';
import KeywordDetection from "../components/quantum/KeywordDetection"
import Mot from "../components/quantum/Mot"
import Survey from "../components/quantum/Survey"
import Contact from "../components/Footer/Contact"
import Respondents from "../components/quantum/Respondents"


function quantum() {
  return (
    <>
      <KeywordDetection />
      <Mot />
      <Survey />
      <Respondents />
      <Contact msg={"👈 Back home page"} link={"/"} colorSwap={true} />
    </>
  );
}

export default quantum;
