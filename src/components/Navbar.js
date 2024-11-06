import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

// const links = [
//   {
//     title: "Home",
//     link: "home",
//   },
//   {
//     title: "About",
//     link: "about",
//   },
//   {
//     title: "Skills",
//     link: "skills",
//   },
//   {
//     title: "Projects",
//     link: "projects",
//   },
//   {
//     title: "Experience",
//     link: "experience",
//   },
//   {
//     title: "Contact",
//     link: "contact",
//   },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
//       <div className="mx-auto py-2 px-5 flex flex-row justify-between items-center lg:py-4">
//         <Link
//           data-aos="fade-right"
//           data-aos-duration="1000"
//           data-aos-once="false"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={750}
//           to="home"
//           className="flex justify-center items-center"
//         >
//           <div
//             className="w-22 h-100 ml-10 cursor-pointer scale-125 lg:scale-150 lg:ml-10"
           
//             alt="Balaji"
//           >My Portfolio</div>
//         </Link>
//         <nav
//           data-aos="fade-left"
//           data-aos-duration="1000"
//           data-aos-once="false"
//           className="hidden md:ml-auto lg:flex flex-wrap items-center text-xl justify-center"
//         >
//           {links.map((item) => {
//             return (
//               <Link
//                 key={item.title}
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={750}
//                 to={item.link}
//                 className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12"
//               >
//                 {item.title}
//               </Link>
//             );
//           })}
//         </nav>
//         <div
//           data-aos="fade-left"
//           data-aos-duration="1000"
//           data-aos-once="false"
//           className="lg:hidden mr-2"
//         >
//           <button onClick={toggleMenu} className="p-2 text-white">
//             {isMenuOpen ? (
//               <MdClose className="h-6 w-6" />
//             ) : (
//               <BiMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//         {isMenuOpen && (
//           <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
//             <div className="rounded-b-lg bg-darkblue shadow-lg px-5 pb-4">
//               <nav
//                 data-aos="zoom-in-down"
//                 data-aos-duration="1000"
//                 data-aos-once="false"
//                 className="flex flex-col gap-y-7 text-xl"
//               >
//                 {links.map((item) => {
//                   return (
//                     <Link
//                       key={item.title}
//                       onClick={() => setIsMenuOpen(false)}
//                       spy={true}
//                       smooth={true}
//                       offset={-100}
//                       duration={750}
//                       to={item.link}
//                       className="cursor-pointer hover:text-dark-orange"
//                     >
//                       {item.title}
//                     </Link>
//                   );
//                 })}
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

const links = [
  { title: "Home", link: "home" },
  { title: "About", link: "about" },
  { title: "Skills", link: "skills" },
  { title: "Projects", link: "projects" },
  { title: "Experience", link: "experience" },
  { title: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between items-center lg:py-4">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          className="flex justify-center items-center text-xl font-semibold"
        >
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:ml-auto lg:flex flex-wrap items-center text-lg justify-center">
          {links.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              className="relative mr-5 md:mr-8 cursor-pointer text-gray-100 hover:text-dark-orange transition-colors duration-200"
            >
              <span className="pb-1 border-b-2 border-transparent hover:border-dark-orange transition-all duration-300 ease-in-out">
                {item.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mr-2">
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-300 lg:hidden">
            <div className="rounded-b-lg bg-darkblue shadow-lg px-5 pb-4">
              <nav className="flex flex-col gap-y-5 text-lg">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={750}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-100 hover:text-dark-orange cursor-pointer transition-colors duration-200"
                  >
                    <span className="pb-1 border-b-2 border-transparent hover:border-dark-orange transition-all duration-300 ease-in-out">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};




export default Navbar;
