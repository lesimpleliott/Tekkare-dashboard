import Settings from "../components/Navbar/Settings";
import TopNav from "../components/Navbar/TopNav";
import useStoreMenu from "../stores/menu.store";

const Navbar = () => {
  const { menuIsOpen } = useStoreMenu();

  return (
    <header className="flex flex-row-reverse items-start gap-2">
      <nav
        className={`flex h-full flex-col gap-4 overflow-hidden bg-gray-100 py-5 shadow-2xl shadow-black transition-all duration-300 ease-in-out ${menuIsOpen ? "w-14 md:w-48 lg:w-56" : "w-0 md:w-14 lg:w-14"} `}
      >
        {/* TOP NAVBAR */}
        <TopNav />

        {/* Hospital */}
        <section className="flex-1 border-y-2 border-slate-200"></section>

        {/* Settings */}
        <Settings />
      </nav>
    </header>
  );
};

export default Navbar;
