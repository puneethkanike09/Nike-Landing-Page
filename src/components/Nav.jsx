import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import React Icon
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <header className="padding-x py-8 absolute z-10 w-full">
                <nav className="flex justify-between items-center max-container">
                    <a href="/">
                        <img
                            src={headerLogo}
                            alt="logo"
                            width={129}
                            height={29}
                            className="m-0 w-[129px] h-[29px]"
                        />
                    </a>
                    <div className="fixed top-7 right-4 lg:right-16 z-30"> {/* Make hamburger sticky */}
                        <img
                            src={hamburger}
                            alt="hamburger icon"
                            width={25}
                            height={25}
                            className="cursor-pointer max-lg:mr-0 lg:mr-8 hover:scale-x-125 transition-all duration-300"
                            onClick={toggleSidebar}
                        />
                    </div>
                </nav>
            </header>
            {/* Sidebar */}
            <aside
                className={`fixed inset-0 bg-coral-red z-20 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300`}
            >
                <button
                    className="absolute top-4 right-4 text-[25px] lg:text-[50px] text-white hover:text-black hover:scale-125 transition-all duration-300"
                    onClick={toggleSidebar}
                >
                    <FaTimes />
                </button>
                <ul className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((item) => (
                        <li key={item.label} className=" transition-all duration-500">
                            <a
                                href={item.href}
                                className="font-palanquin text-3xl md:text-8xl hover:tracking-[30px] font-semibold text-white hover:text-black transition-all duration-500"
                                onClick={toggleSidebar} // Close sidebar on click
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Nav;
