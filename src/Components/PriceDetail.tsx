import moment from "moment";
import {Table} from "react-bootstrap";
import React from "react";
import {getProposalSummary} from "../service/PricingToolService";
import IPriceDetailProp from "../Model/IPriceDetailProp";
import Summary from "./Summary";

export const PriceDetail = (props: IPriceDetailProp) => {
    const DD_MM_YY = 'DD/MM/YYYY';

    const [summary, setSummary] = React.useState({
        "bookingCountry": "",
        "facility": "",
        "currency": "",
        "limit": "",
        "startDate": "",
        "maturityDate": ""
    });

    function getSummary(id: string) {
        getProposalSummary(id).then(s => {
            setSummary(s.data);
        })
    }

    return (<>
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
                props.proposals.map(p => {
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
                        <Summary summary={summary} />
                    </td>
                </tr>
            }
            </tbody>

        </Table>
    </>);
}
export default PriceDetail;