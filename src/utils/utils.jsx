import axios from "axios";

const productionURL = 'https://strapi-store-server.onrender.com/api';

export const customAPI = axios.create({
    baseURL: productionURL,
});

export const formatPrice = (price) => {
    const dollarsAmt = Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD',
    }).format( (price/100).toFixed(2) );

    return dollarsAmt;
}


export const generateAmountOption = (number) =>{
    return Array.from({length: number}, (_, index)=>{
        let amount = index + 1;
        return <option key={amount} value={amount}>{amount}</option>
    })
}