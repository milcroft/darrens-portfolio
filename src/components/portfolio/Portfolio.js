import { Link } from 'react-scroll';

// hooks
import { useTheme } from '../../hooks/useTheme';

// import components
import Border from '../../components/border/Border';

// import css
import '../../components/portfolio/Portfolio.css';

//import icons from
import { BsArrowDownCircle } from 'react-icons/bs';

export default function Portfolio() {
  const { mode } = useTheme();

  return (
    <div id='portfolio-section' className={`portfolio-section ${mode}`}>
      <h2 className={`portfolio--title ${mode}`}>Portfolio</h2>
      <Border />

      <div className='portfolio'>
        <div className='columns'>
          <div className={`column ${mode}`}>
            <a href='https://github.com/milcroft/example-news-api'>
              <img
                className={`responsive ${mode}`}
                src={require('../../images/api.png')}
                alt='image1'
              />
              <div className={`column-title ${mode}`}>API</div>
            </a>
          </div>
          <div className={`column ${mode}`}>
            <a href='https://github.com/milcroft/fe-nc-news-version-1'>
              <img
                className={`responsive ${mode}`}
                src={require('../../images/news.png')}
                alt='image1'
              />

              <div className={`column-title ${mode}`}>News App</div>
            </a>
          </div>
          <div className={`column ${mode}`}>
            <a href='https://github.com/milcroft/koalas-project'>
              <img
                className={`responsive ${mode}`}
                src={require('../../images/fridge-tracker-app.png')}
                alt='image1'
              />
              <div className={`column-title ${mode}`}>Fridge Tracker</div>
            </a>
          </div>
        </div>
      </div>

      <div className={`portfolio--scroll-nav ${mode}`}>
        <Link to='contact-section' smooth={true} duration={1000} offset={-70}>
          <BsArrowDownCircle />
        </Link>
      </div>
    </div>
  );
}
