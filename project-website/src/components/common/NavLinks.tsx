import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
  isDarkBackground?: boolean;
}

const NavLinks = ({ mobile = false, isDarkBackground = false }: NavLinksProps) => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/domain', label: 'Domain' },
    { path: '/milestones', label: 'Milestones' },
    { path: '/documents', label: 'Documents' },
    { path: '/presentations', label: 'Presentations' },
    { path: '/contact', label: 'Contact' },
  ];

  const baseClasses = "transition-colors duration-200 font-medium";
  
  // Desktop classes with dark background support
  const desktopClasses = isDarkBackground 
    ? "text-white hover:text-gray-200 px-1 py-2 border-b-2 border-transparent hover:border-white"
    : "text-gray-700 hover:text-primary-700 px-1 py-2 border-b-2 border-transparent hover:border-primary-700";
  
  // Mobile classes (always use light background in mobile menu)
  const mobileClasses = "text-gray-700 hover:text-primary-700 py-3 px-4 w-full hover:bg-gray-50 rounded-md";
  
  // Active classes
  const activeDesktopClasses = isDarkBackground
    ? "text-white border-b-2 border-white"
    : "text-primary-800 border-b-2 border-primary-700";
  const activeMobileClasses = "text-primary-800 bg-primary-50";
  
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            mobile
              ? `${baseClasses} ${mobileClasses} ${isActive ? activeMobileClasses : ''}`
              : `${baseClasses} ${desktopClasses} ${isActive ? activeDesktopClasses : ''}`
          }
          end={link.path === '/'}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;