import { Link } from "react-router-dom";

const Background = (props) => {
    return (
      <div className='olContainer'>
      <div className='overlay'>
          <h1>IRON TEMPLARS</h1>
          <p>Mission Statement: To demonstrate a
life that has been renewed through
Christ. To disciple others toward
freedom from all types of struggles. We
work together to encourage and mentor
others to find full recovery in Christ.</p>
      </div>
          <div className="line"></div>
          <div className='CTA'>
          <Link className='links' to="/About">
            <h5>Find out more</h5>
            </Link>
          </div>
      </div>
    );
  }
  
  export default Background;