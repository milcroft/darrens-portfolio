import { Link } from 'react-scroll';

// hooks
import { useTheme } from '../../hooks/useTheme';

// import css
import '../../components/hero/Hero.css';

//import icons from
import { BsArrowDownCircle } from 'react-icons/bs';

export default function Hero() {
  const { mode } = useTheme();

  return (
    <div className={`hero-section ${mode}`}>
      <h1 className='hero--title'> Hi,</h1>
      <p className='hero--sub-title'>
        I'm Darren, an aspiring full-stack developer from Manchester and a
        recent graduate of Northcoders. I am looking for my first role as a
        junior developer.
      </p>
      {/* <div className={`hero--button ${mode}`}>Download CV</div> */}

      <div className='hero--scroll-nav'>
        <Link to='portfolio-section' smooth={true} duration={1000} offset={-70}>
          <BsArrowDownCircle />
        </Link>
      </div>
    </div>
  );
}
