/*reducer默认返回一个函数*/
const defalutState = {
    inputValue: "",
    list: [1, 2, 3]
};
export default (state = defalutState, action) => {
    if (action.type === 'input_change_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === 'add_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    if (action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    return state;
}