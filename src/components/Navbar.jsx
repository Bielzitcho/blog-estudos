import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* LOGO */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/logo.png" className='w-8 h-8'/>
                <span>Gabriel Medeiros</span>
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
            {/* MOBILE BUTTON */}
            <div 
                className="cursor-pointer text-3xl" 
                onClick={() => setOpen((prev) => !prev)}>
                    {open ? "V": "☰"}
            </div>
            </div>
            {/* MOBILE LINK LIST */}
            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out bg-white ${open ? "-right-0" : "-right-[100%]"}`}>
                menu
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <a href='/'>Home</a>
                <a href='/'>Trending</a>
                <a href='/'>Most Popular</a>
                <a href='/'>About</a>
                <a href="">
                    <button>Login 🖐️</button>
                </a>
            </div>

        </div>
    )
}

export default Navbar;