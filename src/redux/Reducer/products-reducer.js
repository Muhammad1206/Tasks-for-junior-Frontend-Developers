import ProductsApi from '../../api/api';
const UPDATE_AMOUNT_PRODUCTS = "UPDATE_AMOUNT_PRODUCTS";
const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA";

const intialState = {
    products: [],
    loading: true,
    product: {},
    price: {}
};


const productsReducer = (state = intialState, action) => {
switch (action.type) {
    case SET_PRODUCTS_DATA:
        return {
            ...state,
            products: action.data,
            loading: false
        };
    case UPDATE_AMOUNT_PRODUCTS:
          return {
              ...state,
             product: {
                 ...state.product,  
                [Number(action.id)] : Number(action.amount)
            },
            price: {
                ...state.price,
                [action.id]: action.price
            }
          };
    default:
        return state;
}
};

const getProductsActionCreator = (data) => ({type: SET_PRODUCTS_DATA, data})

export const  getProducts = () =>  (dispatch) => {
    ProductsApi.getProducts()
       .then((response) => {
           dispatch(getProductsActionCreator(response));
       })
};


export const updateAmountProductsActionCreator = (amount, id, price) => (
    {
        type: UPDATE_AMOUNT_PRODUCTS,
        amount, 
        id,
        price
    }
);

export default productsReducer;