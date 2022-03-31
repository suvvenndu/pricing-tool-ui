import axios from 'axios';



const baseURI = "https://localhost:5001/PriceDetails";

export function getProposals() {
    return axios.get(baseURI);
}

export function getProposalSummary(summaryId: string) {
    return axios.get(`${baseURI}/${summaryId}`);
}