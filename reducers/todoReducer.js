import { ADD_TODO, TO_DONE } from '../actions/types';
import _ from 'lodash'

const initialState = {
    data: []
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TODO:
          newState = {
              ...state,
              data: state.data.concat({
                title: action.payload,
                done: false
              })
            }
        return newState;
      case TO_DONE:
          state.data[action.payload].done = true

        return _.cloneDeep(state);
        
        default:
            return state;
    }
  }
  
  export default todoReducer;