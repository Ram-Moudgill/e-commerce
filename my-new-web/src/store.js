import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  productDetailReducer,
  productListReducer,
} from './Reducers./productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
})
const middlewares = [thunk]
const initialState = {}
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export default store

// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer } from './Reducers./productReducers'
// const reducer = combineReducers({ productList: productListReducer })
// const initialState = {}
// const middlewares = [thunk]
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middlewares))
// )
// const store = createStore(
//   initialState,
//   reducers,
//   composeWithDevTools(applyMiddleware(...middlewares))
// )
// export default store
