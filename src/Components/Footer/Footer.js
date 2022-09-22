import React from 'react'
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="courses">
          <p>
            <Link to="/course">courses</Link>
          </p>
        </div>
        <div className="policies">
          <p>
            <Link to="/login"> Terms and Conditions</Link>
          </p>
          <p>
            <Link to="/login">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer