import './landingpage.css';
import illustration from '../assets/landingimage.png';
import {Link} from 'react-router-dom';
import {Header} from '../components/header';

export function Landing() {
  
  return (
    <>
      <div className="parent">
      <Header />  
      <div className="hero-container">
        <div className="hero-texts">
          <h1 className="primary"> Find the Story Behind Your Numbers </h1>
          <h3 className="detail"> Upload your data file, let our system do the rest—store, analyze, and infer Insight.</h3> 
          <div className="buttons">
            <Link to="/auth" className="get-started"> Get Started </Link>
            <Link to="#" className="learn-more"> Learn More </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={illustration}/>
        </div>
      </div>
      </div>
    </>
  );
}
