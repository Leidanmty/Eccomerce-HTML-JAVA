import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/productsDetails.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productsSlice
    }
})