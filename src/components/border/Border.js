// import css
import '../../components/border/Border.css';

// import hooks from 
import { useTheme } from '../../hooks/useTheme';


export default function Border() {
  const { mode } = useTheme();

  return (
    <div className={`border ${mode}`}>
    </div>
  );
}
