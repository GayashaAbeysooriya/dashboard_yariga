import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const menuItems = [
  {
    icon: <DashboardIcon fontSize="small" />, label: "Dashboard", href: "/home"
  },
  {
    icon: <HomeWorkIcon fontSize="small" />, label: "Property", href: "/property"
  },
  {
    icon: <PeopleIcon fontSize="small" />, label: "Agent", href: "/agent"
  },
  {
    icon: <AccountCircleIcon fontSize="small" />, label: "My Profile", href: "/profile"
  }
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm flex flex-col gap-2">
      {menuItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex items-center justify-start gap-4 text-gray-700 py-2 md:px-2 rounded-md hover:bg-blue-100"
        >
          {item.icon}
          <span className="hidden lg:block">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
