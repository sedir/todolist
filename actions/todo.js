import { ADD_TODO, REMOVE_DONE, TO_DONE } from './types';

export const addTodo = (todoText) => {
    return {
        type: ADD_TODO,
        payload: todoText
    }
};

export const toDone = (index) => {
    return {
        type: TO_DONE,
        payload: index
    }
};

export const removeDone = (index) => {
    return {
        type: REMOVE_DONE,
        payload: index
    }
};
