import MenuToggleButton from "../components/MenuToggleButton";
import Hospitals from "../components/Navbar/Hospitals";
import Settings from "../components/Navbar/Settings";
import TopNav from "../components/Navbar/TopNav";
import useStoreMenu from "../stores/menu.store";

const Navbar = () => {
  const { menuIsOpen } = useStoreMenu();

  return (
    <header className="relative">
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
