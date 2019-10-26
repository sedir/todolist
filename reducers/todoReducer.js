import { ADD_TODO, TO_DONE, REMOVE_DONE } from '../actions/types';
import _ from 'lodash'

const initialState = {
    data: []
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TODO:
          return {
            ...state,
            data: state.data.concat({
              title: action.payload,
              done: false,
              status: false
            })
          }
      case TO_DONE:
          state.data[action.payload].done = true
          return _.cloneDeep(state);
      case REMOVE_DONE:
          // TODO remover todo
          state.data[action.payload].status =  true
          return _.cloneDeep(state);
        
        default:
            return state;
    }
  }
  
  export default todoReducer;
