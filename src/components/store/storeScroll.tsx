import {create} from "zustand";
type ScrollStore = {
    scrollToSection: string | null;
    setScrollToSection: (section: string | null) => void;
  };


  export const useScrollStore = create<ScrollStore>((set) => ({
    scrollToSection: null,
    setScrollToSection: (section) => set({ scrollToSection: section }),
  }));