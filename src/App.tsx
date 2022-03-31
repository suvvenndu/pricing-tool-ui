import {getProposals, getProposalSummary} from './service/PricingToolService';
import React, {useEffect} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  {Table} from 'react-bootstrap';

export const App = () => {

    const [proposals, setProposals] = React.useState([{
        proposalId: "",
        proposalName: "",
        customerGroup:"",
        date: "",
        description:"",
        status:"",
        summaryId:""
    }]);
    useEffect(() => {
        getProposals().then(p => {
            console.log(p.data);
            setProposals(p.data);
        });
    }, []);

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
                        // return <li key={p.proposalId}>{p.proposalName}</li>
                        return <tr key={p.proposalId}>
                            <td>{p.proposalName}</td>
                            <td>{p.customerGroup}</td>
                            <td>{p.date}</td>
                            <td>{p.description}</td>
                            <td>{p.status}</td>
                            <td><button id={p.summaryId}>View Summary</button></td>
                        </tr>
                    })
                }
                </tbody>
               
            </Table>
        </>
    );
}

export default App;
