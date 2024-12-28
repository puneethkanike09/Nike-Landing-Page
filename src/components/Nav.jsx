import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className='padding-x py-8 absolute z-50 w-full'>
            <nav className='flex justify-between items-center max-container'>
                {/* Logo */}
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>

                {/* Navigation Links for Desktop */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label} className="group relative">
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray   relative hover:text-orange-500'
                            >
                                {item.label}
                            </a>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>


                {/* Hamburger Icon for Mobile */}
                <div className='hidden max-lg:block cursor-pointer' onClick={toggleSidebar}>
                    <img src={hamburger} alt="Menu" width={25} height={25} />
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            {isSidebarOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center gap-8'>
                    {/* Close Icon */}
                    <div className='absolute top-4 right-4 cursor-pointer text-white' onClick={toggleSidebar}>
                        <AiOutlineClose size={30} />
                    </div>
                    {/* Navigation Links */}
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className='font-montserrat text-white text-2xl'
                            onClick={toggleSidebar} // Close the sidebar on link click
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Nav;
