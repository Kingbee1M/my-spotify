import { create } from "zustand";

type UserState = {
  userInfo: string[] | null;

};

export const useUserStore = create<UserState>((set) => ({
  userInfo: ["Bee"],


}));