import {configureStore} from '@reduxjs/toolkit'
import restaurantsReducer from './components/restaurants/restaurantSlicer'

export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
    },
    
  })