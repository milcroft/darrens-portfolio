import React, { useEffect, useState } from 'react';

// import hooks from 
import { useTheme } from '../../hooks/useTheme';


// import styles from
import '../../components/scroll/ScrollToTop.css';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useTheme();


  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div onClick={scrollToTop}>
          <div className={`scroll--icon ${mode}`}>
            <BsFillArrowUpCircleFill />
          </div>
        </div>
      )}
    </div>
  );
}
