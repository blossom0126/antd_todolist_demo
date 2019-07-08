import {createStore,applyMiddleware} from 'redux'
import  reducer from './reducer'
import thunk from 'redux-thunk'
//创建一个store,并把reducer 传给store，让store知道 state 的值
const store = createStore(reducer,
    applyMiddleware(thunk));
    /*applyMiddleware(thunk),
    也是一个redux的中间件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/
export default store;