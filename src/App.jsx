import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.noScroll) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecciones" element={<Collections />} />
        <Route path="/colecciones/:category" element={<Collections />} />
        <Route path="/colecciones/:category/:productSlug" element={<Collections />} />
      </Routes>
    </Router>
  );
};

export default App;
