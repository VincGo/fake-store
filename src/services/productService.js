import axios from "axios";

const URL_API = "https://fakestoreapi.com/products"

const ProductService = {
    fetchAll () {
        return axios
            .get(URL_API)
            .then((response) => response.data)
            .catch((err) => console.log(err))
    }
}

export default ProductService;
