import React from 'react'
import {Button, Input, List} from 'antd'

//无状态组件
const TodoListUI = (props) => {
    return (
        <div>
            <Input value={props.inputValue}
                   placeholder="todolist"
                   style={{width: '300px', marginRight: '10px'}}
                   onChange={props.handleInputChange}/>
            <Button type="primary" onClick={props.handleAddList}>提交</Button>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                style={{width: 300}}
                bordered
                dataSource={props.list}
                renderItem={(item) => <List.Item
                    onClick={(index) => {
                        props.handleDeleteItem(index)
                    }}>{item}</List.Item>}
            />
        </div>
    )
}

export default TodoListUI;
//普通组件
/*
export default class TodoListUI extends React.Component {
    render() {
        return (

            <div>
                <Input value={this.props.inputValue}
                       placeholder="todolist"
                       style={{width: '300px', marginRight: '10px'}}
                       onChange={this.props.handleInputChange}/>
                <Button type="primary" onClick={this.props.handleAddList}>提交</Button>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    style={{width: 300}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item) => <List.Item
                        onClick={(index)=>{this.props.handleDeleteItem(index)}}>{item}</List.Item>}
                />
            </div>)
    }
}*/
