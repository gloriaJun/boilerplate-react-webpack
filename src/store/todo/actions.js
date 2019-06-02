import * as types from './types';

// action creators
export const addToDo = text => ({
  type: types.ADD_TODO,
  text,
});

export const toggleToDo = (id, isCompleted) => ({
  type: types.TOGGLE_TODO,
  id,
  isCompleted,
});
//
// // 모듈의 초기 상태를 정의합니다.
// const initialState = {
//   number: 0,
// };
//
// // 리듀서를 만들어서 내보내줍니다.
// export default function reducer(state = initialState, action) {
//   // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
//   // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 };
//     case DECREMENT:
//       return { number: state.number - 1 };
//     default:
//       return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
//   }
// }
