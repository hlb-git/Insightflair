import './landingpage.css';
import illustration from '../assets/landingimage.jpg';
import {Link} from 'react-router-dom';


export function Landing() {
  
  return (
    <>
      <div className="parent">
      <div className="h-wrapper">
        <div className="header">
          <span className="logo">
            InsightFlair
          </span>
          <div className="links">
            <Link to="#"> Overview </Link>  
            <Link to="#"> FAQ </Link>
            <Link to="/auth"> Login </Link> 
          </div>
          <div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
