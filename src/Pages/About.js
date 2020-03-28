import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Accordion,Card } from 'react-bootstrap';

function About() {
        return (
        <>
           <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      What is Novel Coronavirus?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.

                A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Can humans become infected with a novel coronavirus of animal source?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    What are the symptoms of someone infected with a coronavirus?
        </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>It depends on the virus, but common signs include respiratory symptoms, fever, cough, shortness of breath, and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Is there a vaccine for a novel coronavirus?
        </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
    What can I do to protect myself?
        </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </>
    )
}

export default About
