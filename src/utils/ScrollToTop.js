import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); // Access location object which contains the current URL info

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Re-run this effect if the location changes

  return null;
}

export default ScrollToTop;
