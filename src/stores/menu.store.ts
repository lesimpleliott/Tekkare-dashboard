import { create } from "zustand";

type menuStoreType = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

const useStoreMenu = create<menuStoreType>((set) => ({
  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen: boolean) => set({ menuIsOpen }),
}));

export default useStoreMenu;
