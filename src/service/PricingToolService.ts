import axios from 'axios';



const proposalsURI = "https://localhost:5001/PriceDetails";
const summariesURI = "https://localhost:5001/Summaries";

export function getProposals() {
    return axios.get(proposalsURI);
}

export function getProposalSummary(summaryId: string) {
    return axios.get(`${summariesURI}/${summaryId}`);
}