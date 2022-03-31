import {getProposals, getProposalSummary} from './service/PricingToolService';
import React, {useEffect} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Table} from 'react-bootstrap';


export const App = () => {

    const [proposals, setProposals] = React.useState([{
        proposalId: "",
        proposalName: "",
        customerGroup: "",
        date: "",
        description: "",
        status: "",
        summaryId: ""
    }]);

    const [summary, setSummary] = React.useState({
        "bookingCountry": "",
        "facility": "",
        "currency": "",
        "limit": "",
        "startDate": "",
        "maturityDate": ""
    });

    useEffect(() => {
        getProposals().then(p => {
            setProposals(p.data);
        });
    }, []);

    function getSummary(id: string) {
        getProposalSummary(id).then(s => {
            setSummary(s.data);
        })
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Propposal Name</th>
                    <th>Customer Group</th>
                    <th>Date (Last Saved)</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {
                    proposals.map(p => {
                        return <tr key={p.proposalId}>
                            <td>{p.proposalName}</td>
                            <td>{p.customerGroup}</td>
                            <td>{p.date}</td>
                            <td>{p.description}</td>
                            <td>{p.status}</td>
                            <td>
                                <button id={p.summaryId} onClick={() => {
                                    getSummary(p.summaryId)
                                }}>View Summary
                                </button>
                            </td>
                        </tr>
                    })
                }
                {summary.currency != "" &&
                    <tr>
                        <td>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Facility</th>
                                    <th>Boking Country</th>
                                    <th>Currency</th>
                                    <th>Limit</th>
                                    <th>Start Date</th>
                                    <th>Maturity Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{summary.facility}</td>
                                    <td>{summary.bookingCountry}</td>
                                    <td>{summary.currency}</td>
                                    <td>{summary.limit}</td>
                                    <td>{summary.startDate}</td>
                                    <td>{summary.maturityDate}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                }
                </tbody>

            </Table>
        </>
    );
}

export default App;
