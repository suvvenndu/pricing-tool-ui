import {getProposals, getProposalSummary} from './service/PricingToolService';
import React, {useEffect} from 'react';
import Facilities from "./Constants/Facilities";
import 'bootstrap/dist/css/bootstrap.css';
import {Table} from 'react-bootstrap';
import moment from 'moment';


export const App = () => {
    const DD_MM_YY = 'DD/MM/YYYY';
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
                            <td>{moment(p.date).format(DD_MM_YY)}</td>
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
                                    <td>
                                        <select value={summary.facility}>
                                            {Facilities.map((e, key) => {
                                                return <option key={key} value={e.value}>{e.name}</option>;
                                            })}
                                        </select>
                                    </td>
                                    <td>{summary.facility}</td>
                                    <td>{summary.bookingCountry}</td>
                                    <td>{summary.currency}</td>
                                    <td>{summary.limit}</td>
                                    <td>{moment(summary.startDate).format(DD_MM_YY)}</td>
                                    <td>{moment(summary.maturityDate).format(DD_MM_YY)}</td>
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
