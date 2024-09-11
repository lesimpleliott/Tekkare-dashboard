import useStoreMenu from "../../stores/menu.store";
import Hospitals from "./HospitalSection";
import MenuToggleButton from "./MenuToggleButton";
import Settings from "./Settings";
import TopNav from "./TopNav";

const Navbar = () => {
  const { menuIsOpen } = useStoreMenu();

  return (
    <header className="relative z-20">
      <MenuToggleButton />

      <nav
        className={`flex h-full min-h-dvh flex-col gap-4 overflow-hidden bg-gray-100 py-5 shadow-2xl shadow-black transition-all duration-300 ease-in-out ${menuIsOpen ? "w-14 md:w-56" : "w-0 md:w-14 xl:w-56"} `}
      >
        <TopNav />
        <Hospitals />
        <Settings />
      </nav>
    </header>
  );
};

export default Navbar;
