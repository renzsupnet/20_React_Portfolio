// This is a static page mocking an "About Us" section for our fake user data
import Resume from '../components/Resume';
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";

export default function HomePage() {

  const ulStyle = {
    marginTop: '25px',
    fontSize: '25px'
  }

    return (
      <div className="container pt-4">
        <h1>Skills Acquired</h1>
        <ul style={ulStyle}>
          <RiJavascriptFill />JavaScript <RiJavaLine />Java<br></br>
          <br></br>
          <FaNetworkWired />Network Configuration   <FaPython />Python<br></br>
          <br></br>
          <PiFileSqlFill />SQL    <SiMysql />MySQL<br></br>
          <br></br>
          <FaAws />AWS    <FaDesktop />Computer Hardware<br></br>
          <br></br>
          <MdDesktopMac />Information Technology<br></br>
        </ul>
        <Resume />
      </div>

      
    );
  }
  