import Facilities from "../Constants/Facilities";
import moment from "moment";
import {Table} from "react-bootstrap";
import React from "react";
import ISummaryProp from "../Model/ISummaryProp";

export const Summary = (props: ISummaryProp) => {
    const DD_MM_YY = 'DD/MM/YYYY';

    const {summary} = props;
    return (<>
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
                <td>{summary.bookingCountry}</td>
                <td>{summary.currency}</td>
                <td>{summary.limit}</td>
                <td>{moment(summary.startDate).format(DD_MM_YY)}</td>
                <td>{moment(summary.maturityDate).format(DD_MM_YY)}</td>
            </tr>
            </tbody>
        </Table>
    </>);
}
export default Summary;