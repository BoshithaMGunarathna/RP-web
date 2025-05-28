import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Domain from '../pages/Domain';
import Milestones from '../pages/Milestones';
import Documents from '../pages/Documents';
import Presentations from '../pages/Presentations';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="domain" element={<Domain />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="documents" element={<Documents />} />
        <Route path="presentations" element={<Presentations />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;