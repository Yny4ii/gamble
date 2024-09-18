import { create } from "zustand";

interface CasinoStore {
  balance: number;
  minusBalance: (quantity: number) => void;
  plusBalance: (quantity: number) => void;
  totalBet: number;
  totalWin: number;
  increaseBet: () => void;
  decreaseBet: () => void;
  changeTotalWin: (quantity: number) => void;
  maxBet: () => void;
}

const useCasinoStore = create<CasinoStore>((set) => {
  const initialState: CasinoStore = {
    balance: 25,
    totalBet: 1,
    totalWin: 0,
    minusBalance: (quantity) => {
      set((state) => {
        const newBalance = state.balance - quantity;
        return { balance: newBalance };
      });
    },
    plusBalance: (quantity) => {
      set((state) => {
        const newBalance = state.balance + quantity;
        return { balance: newBalance };
      });
    },
    increaseBet: () => {
      set((state) => {
        return {
          totalBet:
            state.totalBet + 1 > state.balance
              ? state.balance
              : state.totalBet + 1,
        };
      });
    },
    decreaseBet: () => {
      set((state) => {
        return { totalBet: state.totalBet - 1 > 0 ? state.totalBet - 1 : 0 };
      });
    },
    maxBet: () => {
      set((state) => {
        return { totalBet: state.balance };
      });
    },
    changeTotalWin: (quantity) => {
      set((state) => {
        return { totalWin: quantity };
      });
    },
  };

  return initialState;
});

export default useCasinoStore;
