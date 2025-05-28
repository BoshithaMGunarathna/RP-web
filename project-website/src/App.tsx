import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
    </Router>
  );
}

export default App;