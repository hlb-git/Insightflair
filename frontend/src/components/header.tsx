import {Link} from 'react-router-dom';
import './header.css';

export function Header() {
  return (
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
  );

}
