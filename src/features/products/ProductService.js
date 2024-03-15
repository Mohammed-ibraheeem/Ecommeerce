import axios from "axios";
import { base_url } from '../../utils/AxiosCongig'

const getproducts = async (userData) => {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
        return response.data;
    }
}

export const productsService = {
    getproducts
}