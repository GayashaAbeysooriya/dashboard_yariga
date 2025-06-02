import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <SearchIcon fontSize="small" className="text-gray-500" />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <NotificationsIcon fontSize="small" className="text-gray-700" />
          <div className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white'></div>
        </div>
        <Avatar alt="John Doe" src="/avatar.png" sx={{ width: 36, height: 36 }} />
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Company Manager</span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
