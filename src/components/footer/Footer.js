// import css
import '../../components/footer/Footer.css';

// import hooks from 
import { useTheme } from '../../hooks/useTheme';

export default function Footer() {
  const { mode } = useTheme();

  return (
    <div className={`footer ${mode}`}>
      <div>© 2022 Darren's Portfolio</div>
      <div></div>
    </div>
  );
}
