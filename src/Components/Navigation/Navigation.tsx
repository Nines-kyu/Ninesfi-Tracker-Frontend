import './Navigation.css'
import photo from '../../assets/Navi_Rosca.jpg'
import { Home, ChartPie, Settings, BanknoteArrowDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const navItems = [
    { label: "Dashboard", path: "/", icon: <Home size={18} />},
    { label: "Expenses", path: "/expenses", icon: <BanknoteArrowDown size={18} />},
    { label: "Reports", path: "/reports", icon: <ChartPie size={18} />},
    { label: "Settings", path: "/settings", icon: <Settings size={18} />},
  ];

    return (
        <div className='flex flex-col w-full h-full p-4 items-center'>
            <h1 className="font-nunito text-2xl font-bold text-navi-orange mb-4">NinesFi Tracker</h1>
            <div className='profile-avatar w-32 h-32 sm:w-38 sm:h-38 relative rounded-full overflow-hidden border-4 border-navi-orange shadow-[0_0_9px_#FF914D]'>
                <img 
                    src={photo}
                    alt='Profile Image'
                    className='profile-image' 
                />
            </div>
            <h2 className='mt-2 text-lg sm:text-xl font-bold text-softWhite'>Navi Rosca</h2>
            <nav className='flex flex-col w-full mx-auto space-y-2 text-white pt-4'>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div key={item.path}>
                            <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-2 rounded-xl transition flex items-center
                                ${isActive
                                ? 'bg-navi-orange text-softWhite font-semibold border-l-4 border-orange-700' 
                                : 'hover:bg-gray-700 border-l-4 border-transparent '}`}
                            >
                                {item.icon}
                                <span className='ml-2'>{item.label}</span>
                            </Link>
                        </div>
                    )
                })}
            </nav>
            <div className="mt-auto w-full">
                <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navigation;