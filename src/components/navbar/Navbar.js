import { Link } from 'react-scroll';

// hooks
import { useTheme } from '../../hooks/useTheme';

//import components
import ThemeSelector from '../../components/theme/ThemeSelector';

// import icons from './icons
import { HiOutlineCode } from 'react-icons/hi';

// import css
import '../../components/navbar/Navbar.css';

export default function Navbar() {
  const { mode } = useTheme();

  return (
    <div className={`navbar-outer ${mode}`}>
      <div className='navbar-container'>
        <Link to='app' smooth={true} duration={1000}>
          <div className={`logo ${mode}`}>
            <div className={`logo--circle ${mode}`}>
              <div className={`logo--icon ${mode}`}>
                <HiOutlineCode />
              </div>
            </div>

            <div className='logo--text'>Darren's Portfolio</div>
          </div>
        </Link>

        <div className='navbar--theme-selector'>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
