import { ADD_TODO, REMOVE_TODO, TO_DONE } from './types';

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

export const removeTodo = (todoText) => {
    return {
        type: REMOVE_TODO,
        payload: todoText
    }
};
