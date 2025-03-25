import { create } from "zustand";

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  incrementBy: (value: number) => void
}

// 스토어 생성
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  incrementBy: (value) => set((state) => ({ count: state.count + value })),
}))