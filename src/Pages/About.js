import React,{useContext,useEffect} from 'react'
import { Accordion,Card,Row,Col } from 'react-bootstrap';
import Accordiondata from '../Components/Accordiondata';
import { UserContext } from '../App'
import axios from 'axios';

function About() {
  
  const context = useContext(UserContext)
  console.log(context)






  var QAS = [
    {
      head: "What is Novel Coronavirus?", body: `A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.
    A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis.`},
    { head: "Can humans become infected with a novel coronavirus of animal source?", body: `Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified.` },
    { head: "What are the symptoms of someone infected with a coronavirus?", body: `It depends on the virus, but common signs include respiratory symptoms, fever, cough, shortness of breath, and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.` },
    { head: "Is there a vaccine for a novel coronavirus?", body: `When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed.` },
    { head: "What can I do to protect myself?", body: `Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified.` },
    { head: "How long is the incubation period?" ,body:`The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available.`},
    
  ]

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    
<Card  border="info" bg="light" style={{ borderRadius: 25, borderWidth: 2}}>
<Card.Title>Sources and Important Links</Card.Title>    
<Row className="justify-content-md-center">

<Col md="auto">
  <Card  border="warning" style={{ borderRadius: 25, borderWidth: 2}}>

    <Card.Body bodycolor={"#2F4F4F"}>
      <Card.Title><a href="https://www.who.int/" target="_blank" style={{ color: '#800020' }}>WHO Website</a></Card.Title>
      <Card.Text>
      </Card.Text>
      
    </Card.Body>
    </Card>
    </Col>
    <Col md="auto">
  <Card border="primary" style={{ borderRadius: 25, borderWidth: 2}}>
     <Card.Body>
      <Card.Title><a href="https://www.mygov.in/covid-19/?cbps=1" target="_blank" style={{ color: '#800020' }} >Indian Government</a></Card.Title>
      <Card.Text>
      
      
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col md="auto">
  <Card border="success" style={{ borderRadius: 25, borderWidth: 2}}>
    <Card.Body>
      <Card.Title><a href="https://github.com/amodm/api-covid19-in" target="_blank" style={{ color: '#800020' }}>GitHub Repo</a></Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  </Card>

<br/>
<br/>
<br/>

<Card border="info" bg="light" style={{ borderRadius: 25, borderWidth: 2}}>
  <Card.Body >
  <Card.Title>FAQ</Card.Title>
    <Card.Text>
    <Accordion defaultActiveKey="0">
        {QAS.map((QA, index) => <Card style={{ width: '100%' }} border="secondary" key={index}><Accordiondata head={QA.head} body={QA.body} index={index} /></Card>)}
      </Accordion>
    </Card.Text>
  </Card.Body>
</Card>
    </>
  )
}

export default About
