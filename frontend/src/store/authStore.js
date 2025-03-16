import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useAuthStore = create(persist((set) => ({
  user: null,
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null })
})), {
  name: 'isLoggedIn',
  storage: createJSONStorage(() => localStorage)
});

export default useAuthStore;