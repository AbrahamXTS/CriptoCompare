import axios from 'axios';

const getInfoCriptos = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data"
});

export const getCriptoList = async () => {
    try {
        const response = await getInfoCriptos.get("/top/mktcapfull?limit=10&tsym=USD");
        return response;
    } catch (error) {
        alert("Ha ocurrido un error mientras se consultaban las monedas.")
    }
}

export const getInfo = async (moneda, cripto) => {
    try {
        const response = await getInfoCriptos.get(`/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`);
        return response;
    } catch (error) {
        alert("Ha ocurrido un error mientras se consultaba la información requerida.")
    }
}