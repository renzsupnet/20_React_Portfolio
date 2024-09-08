// This is a static page "PorfolioPage" section
import { FaGithub } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";

export default function PorfolioPage() {

    const cardStyle = {
        width: '100%',
        height: '580px',
        margin: '20px',
        alignItems: 'center',
        textAlign: 'center',
    }

    const cardStyleTop = {
        width: '100%',
        height: '580px',
        marginTop: '90px',
        marginLeft: '20px',
        marginRight: '20px',
        alignItems: 'center',
        textAlign: 'center',
    }

    const cardStyleBottom = {
        width: '100%',
        height: '580px',
        marginBottom: '130px',
        marginLeft: '20px',
        marginRight: '20px',
        alignItems: 'center',
        textAlign: 'center',
    }

    const cardBody = {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#FADFA1',
        bottom: 0
    }

    const imageStyle = {
        width: '100%',
        transition: 'all 0.3s ease-in-out'
    }

    const iconStyle = {
        margin: '10px',
    }
    return (
      <div className="container">
        <div className="row">
            <div className="col-6">
            <div className="card" style={cardStyleTop}>
                <img src="https://raw.githubusercontent.com/CloudOfAlemar/quantum-rig/6012bd6480d24d56024828da5bd5567c66eb00df/public/img/quantum-rig-bg.svg" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">Quantum Rig</h5>
                    <p className="card-text">Quantum Rig is a full-stack web application that allows users to create and manage custom PC builds. Users can sign up, log in, and create personalized PC builds by selecting and commenting on various parts.</p>
                    <a href="https://github.com/CloudOfAlemar/quantum-rig/tree/fixed" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://quantum-rig-k6zh.onrender.com" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div className="card" style={cardStyleTop}>
                <img src="https://github.com/renzsupnet/14_Tech_Blog/blob/main/public/img/profile.png?raw=true" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">Tech Blog</h5>
                    <p className="card-text">This tech blog has been developed using express, sessions, bcrypt, sequalize, and handlebars. Certain routes are closed off from non members and require signing up before adding blog posts and/or commenting.</p>
                    <a href="https://github.com/renzsupnet/14_Tech_Blog/tree/main" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://one4-tech-block.onrender.com" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div className="card" style={cardStyle}>
                <img src="https://github.com/renzsupnet/19_JATE_PWA/blob/main/assets/screenshots/manifest.png?raw=true" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">JATE PWA</h5>
                    <p className="card-text">A simple text editor that is an installable PWA application that uses service workers</p>
                    <a href="https://github.com/renzsupnet/19_JATE_PWA/tree/main" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://one9-jate-pwa.onrender.com" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div className="card" style={cardStyle}>
                <img src="https://github.com/renzsupnet/06_Weather_DashBoard/blob/main/assets/images/results.png?raw=true" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">A challenge to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.</p>
                    <a href="https://github.com/renzsupnet/06_Weather_DashBoard" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://renzsupnet.github.io/06_Weather_DashBoard/" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div className="card" style={cardStyleBottom}>
                <img src="https://github.com/renzsupnet/11_Note_Taker/blob/main/public/assets/img/sample.png?raw=true" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">An Express JS application about taking notes and applying routing principles.</p>
                    <a href="https://github.com/renzsupnet/11_Note_Taker/tree/main" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://one1-note-taker-zplh.onrender.com" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div className="card" style={cardStyleBottom}>
                <img src="https://github.com/renzsupnet/04_Web_API_Challenge/blob/main/assets/images/blog.png?raw=true" className="card-img-top" alt="..." style={imageStyle}/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">Web API Challenge</h5>
                    <p className="card-text">A challenge to create a blog that displays the title, content and author from localStorage.</p>
                    <a href="https://github.com/renzsupnet/04_Web_API_Challenge" className="btn btn-primary" style={iconStyle}><FaGithub/></a>
                    <a href="https://renzsupnet.github.io/04_Web_API_Challenge/" className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
  }
  