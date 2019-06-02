import * as types from '@/store/todo/types';
import * as actions from '@/store/todo/actions';
import reducer from '@/store/todo/reducer';

describe('[store] counter', () => {
  describe('actions', () => {
    it('should create an action to add a todo', () => {
      // given
      const text = 'new ToDo';

      // when
      const action = actions.addToDo(text);

      // then
      expect(action).toEqual({
        type: types.ADD_TODO,
        text,
      });
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([]);
    });

    it('should be add new todo', () => {
      // given
      const action = {
        type: types.ADD_TODO,
        text: 'new ToDo',
      };

      // when
      const state = reducer([], action);

      expect(state).toEqual([
        {
          id: 0,
          text: 'new ToDo',
          isCompleted: false,
        },
      ]);
    });
  });
});
