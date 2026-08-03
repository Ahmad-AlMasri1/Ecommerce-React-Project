import { create } from "zustand";
const Mode = localStorage.getItem('mode') || 'light';
const useThemeStore = create((set) => ({
  mode: Mode,
  toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));
export default useThemeStore;