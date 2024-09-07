import useStoreMenu from "../stores/menu.store";

const MenuToggleButton = () => {
  const { menuIsOpen, setMenuIsOpen } = useStoreMenu();
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="flex flex-row-reverse items-center gap-2"
    >
      <p
        className={`text-lg text-gray-50 opacity-0 transition-opacity ease-in-out ${menuIsOpen ? "opacity-O" : "opacity-100"}`}
      >
        Menu
      </p>

      <div className="cta flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-md p-1.5 shadow-cta-blue">
        <span
          className={`duration-250 block h-[2px] w-full rounded bg-gray-50 transition-transform ease-in-out ${menuIsOpen ? "translate-y-[6px] rotate-45 transform" : ""}`}
        ></span>
        <span
          className={`duration-250 block h-[2px] w-full rounded bg-gray-50 transition-transform ease-in-out ${menuIsOpen ? "opacity-0" : ""} `}
        ></span>
        <span
          className={`duration-250 block h-[2px] w-full rounded bg-gray-50 transition-transform ease-in-out ${menuIsOpen ? "-translate-y-[6px] -rotate-45 transform" : ""}`}
        ></span>
      </div>
    </button>
  );
};

export default MenuToggleButton;
