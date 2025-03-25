import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// 상태 타입 정의
interface CounterState {
  count: number;
}

// 초기 상태 정의
const initialState: CounterState = {
  count: 0,
};

// slice 생성
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const { increment, decrement, reset, incrementBy } = counterSlice.actions;

// 선택자 함수 내보내기
export const selectCount = (state: RootState) => state.counter.count;

// 리듀서 내보내기
export default counterSlice.reducer;