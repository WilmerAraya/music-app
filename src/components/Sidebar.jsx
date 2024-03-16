import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { logoWithName, logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick, collapsed }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row shrink-0 grow-0 justify-start items-center my-8 text-sm
        font-medium text-gray-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-10 h-10 mr-2 flex flex-shrink-0" />
        <span
          className={`${
            collapsed && 'hidden'
          } whitespace-nowrap origin-left duration-200`}
        >
          {link.name}
        </span>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div
        className={`relative duration-300 md:flex hidden flex-col ${
          collapsed ? 'w-20' : 'w-60'
        } pb-10 pt-5 px-4 bg-sidebar`}
      >
        <div
          className="absolute text-primary top-20 -right-3
          cursor-pointer hover:scale-125 duration-200 hover:text-active"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <FaArrowAltCircleRight className="w-8 h-8" />
          ) : (
            <FaArrowAltCircleLeft className="w-8 h-8" />
          )}
        </div>
        <img
          src={logo}
          alt="logo"
          className=" w-10 h-10 self-center object-contain"
        />
        <div className="w-full text-center">
          <p
            className={`${
              collapsed && 'scale-0'
            } duration-300 origin-left text-2xl text-primary font-bold`}
          >
            SongSpot
          </p>
        </div>
        <NavLinks collapsed={collapsed} />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-primary mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-primary mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl
       from-white/10 to-menuMobile backdrop-blur-lg z-10 p-6 md:hidden
        smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <img
          src={logoWithName}
          alt="logo"
          className="w-40 h-20 self-center object-contain"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
