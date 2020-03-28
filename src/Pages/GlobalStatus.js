import React, { useState, useEffect } from 'react'
import axios from 'axios';
import info from '../info.json'
import Regionaltable from '../Components/Regionaltable';
import Card from '../Components/Carddata';
import { Row, Col } from 'react-bootstrap';


function GlobalStatus() {
    const summary_initial = info.data;
    const regional_initial = info.data.regional;

    const [summary, setSummary] = useState(summary_initial);
    const [regional, setRegional] = useState(regional_initial);

    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
            .then(res => {
                setSummary(res.data.data.summary)
                setRegional(res.data.data.regional)
            })
    }, []);

    return (
        <div>
            <br/>
            <Row >
                <Col><Card name="Total" value={summary.total} headcolor={"#052282"} bodycolor={"#193fbd"} /></Col>
                <Col><Card name="Confirmed(Indian)" value={summary.confirmedCasesIndian} headcolor={"#a85705"} bodycolor={"#e67b10"} /></Col>
                <Col><Card name="Confirmed(Forign)" value={summary.confirmedCasesForeign} headcolor={"#02567a"} bodycolor={"#138dc2"} /></Col>
                <Col><Card name="Recovered" value={summary.discharged} headcolor={"#0e9104"} bodycolor={"#25ba1a"} /></Col>
                <Col><Card name="Deaths" value={summary.deaths} headcolor={"#9c030b"} bodycolor={"#cc101a"} /></Col>
            </Row>
            <br/>
            <Regionaltable regional={regional} />
        </div>
    )
}

export default GlobalStatus
