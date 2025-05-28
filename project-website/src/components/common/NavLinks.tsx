import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
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
  const desktopClasses = "text-gray-700 hover:text-primary-700 px-1 py-2 border-b-2 border-transparent hover:border-primary-700";
  const mobileClasses = "text-gray-700 hover:text-primary-700 py-3 px-4 w-full hover:bg-gray-50 rounded-md";
  
  const activeDesktopClasses = "text-primary-800 border-b-2 border-primary-700";
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