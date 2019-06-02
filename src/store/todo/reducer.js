import * as types from './types';

const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id:
          (state &&
            state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1) ||
          0,
        text: action.text,
        isCompleted: false,
      };
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        isCompleted: !state.isCompleted,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, todo(undefined, action)];
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
