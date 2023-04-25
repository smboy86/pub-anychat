import {create} from 'zustand';

interface TempStore {
  isLogin: boolean;
  toggleLogin: () => void;
  // count: number;
  // increaseCount: (num: number) => void;
  // decreaseCount: (num: number) => void;
}

const useTempStore = create<TempStore>(set => ({
  isLogin: false,
  toggleLogin: () =>
    set(state => ({
      isLogin: !state.isLogin,
    })),
}));

export {useTempStore};
