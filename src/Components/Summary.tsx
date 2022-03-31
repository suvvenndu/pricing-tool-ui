import Facilities from "../Constants/Facilities";
import moment from "moment";
import {Table} from "react-bootstrap";
import React from "react";
import ISummaryProp from "../Model/ISummaryProp";

export const Summary = (props: ISummaryProp) => {
    const DD_MM_YY = 'DD/MM/YYYY';

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
                    <select value={props.summary.facility}>
                        {Facilities.map((e, key) => {
                            return <option key={key} value={e.value}>{e.name}</option>;
                        })}
                    </select>
                </td>
                <td>{props.summary.facility}</td>
                <td>{props.summary.bookingCountry}</td>
                <td>{props.summary.currency}</td>
                <td>{props.summary.limit}</td>
                <td>{moment(props.summary.startDate).format(DD_MM_YY)}</td>
                <td>{moment(props.summary.maturityDate).format(DD_MM_YY)}</td>
            </tr>
            </tbody>
        </Table>
    </>);
}
export default Summary;