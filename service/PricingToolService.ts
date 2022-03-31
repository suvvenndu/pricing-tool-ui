import axios from 'axios';



const pricedetailsURI = "https://localhost:5001/PriceDetails";
const summariesURI = "https://localhost:5001/Summaries";

export function getProposals() {
    return axios.get(pricedetailsURI);
}

export function getProposalSummary(summaryId: string) {
    return axios.get(`${summariesURI}/${summaryId}`);
}