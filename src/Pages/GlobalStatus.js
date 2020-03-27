import React, { useState, useEffect } from 'react'
import axios from 'axios';
import info from '../info.json'

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
            {regional.map(res=><p>{res.loc}</p>)}
            
        </div>
    )
}

export default GlobalStatus
