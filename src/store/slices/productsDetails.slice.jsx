import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from "./isLoading.slice";
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload;
            return products;
        }
    }
})
//con el siguiente export, solo traremos la informacion de los productos para mostrarlo en home

export const getProductsThunks = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProducts(res.data.data.products))) // setNews(res.data)
        .finally(() => dispatch(setIsLoading(false)));
};

export const filterCategoryThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)));
  };


export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
