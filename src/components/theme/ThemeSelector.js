import { useTheme } from '../../hooks/useTheme';
import { MdOutlineBrightnessMedium } from 'react-icons/md';

// styles
import '../theme/ThemeSelector.css';

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
    console.log(mode);
  };
  return (
    <div className='theme-selector'>
      <div
        className='mode-toggle'
        onClick={toggleMode}
        style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%' }}
      >
        <MdOutlineBrightnessMedium />
      </div>
    </div>
  );
}
