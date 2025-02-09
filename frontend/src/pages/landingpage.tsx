import './landingpage.css';
import illustration from '../assets/landingimage.png';
import {Link} from 'react-router-dom';


export function Landing() {
  
  return (
    <>
      <div className="parent">
      <div className="h-wrapper">
        <div className="header">
          <span className="logo">
            Flair
          </span>
          <div className="menus">
            <Link to="#"> Overview </Link>  
            <Link to="#"> FAQ </Link>
            <Link to="#"> Privacy and terms </Link>
            <div className="login">
            <Link to="/auth"> Login </Link> 
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
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
