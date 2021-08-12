import axios from 'axios';

const instance = axios.create({
    baseURL: "https://datainlife.ru/junior_task/",

});
const ProductsApi  = {
     getProducts() {
        return instance
          .get('get_products.php')
          .then((response) => {
              return response.data;
          });
     },
     addProducts(data) {
         return instance
          .post('add_basket.php', data);
     }
    
}

export default ProductsApi;