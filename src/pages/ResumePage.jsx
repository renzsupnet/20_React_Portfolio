// This is a static page mocking an "About Us" section for our fake user data
import Resume from '../components/Resume';
export default function HomePage() {

  const ulStyle = {
    marginTop: '25px'
  }

    return (
      <div className="container pt-4">
        <h1>Skills Acquired</h1>
        <ul style={ulStyle}>
          JavaScript <br></br>
          Java<br></br>
          Network Configuration<br></br>
          Python (Programming Language)<br></br>
          SQL<br></br>
          MySQL (Passed LinkedIn Skill Assessment)<br></br>
          AWS<br></br>
          Computer Hardware<br></br>
          JavaScript<br></br>
          Problem Solving<br></br>
          Information Technology<br></br>
        </ul>
        <Resume />
      </div>

      
    );
  }
  