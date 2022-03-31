import {getProposals} from './service/PricingToolService';
import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
