import {Add_List, Delete_Item, Input_Change_Value} from "./actionType";

export const getInputChangeAction = (value) => ({
    type: Input_Change_Value,
    value
});
export const getAddItemAction = () => ({
    type: Add_List
});
export const getDeleteItemAction = (index) => ({
    type: Delete_Item,
    index
});