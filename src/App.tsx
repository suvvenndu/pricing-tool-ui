import {getProposals, getProposalSummary} from './service/PricingToolService';
import React, {useEffect} from 'react';
import Facilities from "./Constants/Facilities";
import 'bootstrap/dist/css/bootstrap.css';
import {Table} from 'react-bootstrap';
import moment from 'moment';
import PriceDetail from "./Components/PriceDetail";


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


    useEffect(() => {
        getProposals().then(p => {
            setProposals(p.data);
        });
    }, []);


    return (
        <>
            <PriceDetail proposals={proposals}/>
        </>
    );
}

export default App;
