import React from 'react'
import { Table } from 'react-bootstrap'

function Regionaltable({ regional }) {
    return (
        <Table striped bordered hover responsive size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>State</th>
                    <th style={{color:"orange"}}>Confirmed(Indian)</th>
                    <th style={{color:"#218abf"}}>Confirmed(Foreign)</th>
                    <th style={{color:"green"}}>Recovered</th>
                    <th style={{color:"red"}}>Death</th>
                </tr>
            </thead>
            <tbody>

                {regional.map((state, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{state.loc}</td>
                        <td style={{color:"orange"}}>{state.confirmedCasesIndian}</td>
                        <td style={{color:"#218abf"}}>{state.confirmedCasesForeign}</td>
                        <td style={{color:"green"}}>{state.discharged}</td>
                        <td style={{color:"red"}}>{state.deaths}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Regionaltable
