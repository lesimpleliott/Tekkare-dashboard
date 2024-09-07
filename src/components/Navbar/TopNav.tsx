import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <NavLink
      className="flex items-center justify-center gap-2 px-1 md:justify-start md:px-2"
      to="/"
    >
      {/* LOGO */}
      <img
        src="/Tekkare_picto.svg"
        alt="Logo Tekkare"
        className="w-10 min-w-10"
      />
      {/* TITRE */}
      <h1 className="hidden overflow-hidden truncate whitespace-nowrap text-2xl font-bold text-gray-500 md:block">
        Dashboard
      </h1>
    </NavLink>
  );
};

export default TopNav;
