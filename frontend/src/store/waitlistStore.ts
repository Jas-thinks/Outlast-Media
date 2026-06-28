import { create } from "zustand";

interface WaitlistState {
  count: number;
  hasJoined: boolean;
  registerSignup: () => void;
  incrementLive: (amount: number) => void;
}

export const useWaitlistStore = create<WaitlistState>((set) => ({
  count: 0,
  hasJoined: false,
  registerSignup: () =>
    set((state) =>
      state.hasJoined ? state : { count: state.count + 1, hasJoined: true },
    ),
  incrementLive: (amount) => set((state) => ({ count: state.count + amount })),
}));
