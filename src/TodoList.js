import React, {Component} from 'react';
import TodoListUI from './TodoListUI';
import store from './store'
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/createAction";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        //subscribe 接收一个函数参数，当store的内容发生变化时，自动执行这个函数参数
        store.subscribe(this.handleStoreChange)
    }

    //与store做通信，派发action
    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };
    handleDeleteItem = (index) => {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    /*更新state*/
    handleStoreChange = () => {
        this.setState(store.getState())
    };
    handleAddList = () => {
        const action = getAddItemAction()
        store.dispatch(action);
    };

    render() {
        return (<TodoListUI
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleAddList={this.handleAddList}
            list={this.state.list}
            handleDeleteItem={this.handleDeleteItem}
        />)
    }
}

export default TodoList;