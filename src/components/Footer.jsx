import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Footer() {
    const footerStyle = {
        bottom: 'max',
        position: 'fixed',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }

      const logoStyle = {
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }

    return (
        <footer className="footer fixed-bottom py-3 bg-light mt-5" style={footerStyle}>
            <div className="container text-center">
                <span className="text-muted">@Renz Portfolio</span>
                <div className="row" style={logoStyle}>
                    <div className="col-auto px-1">
                        <h1>
                            <a href="https://github.com/renzsupnet" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            </a>
                        </h1>
                    </div>
                    <div className="col-auto px-1">
                        <h1>
                        <a href="mailto:rcbsupnet@gmail.com">
                        <SiGmail />
                        </a>
                        </h1>
                    </div>
                </div>

                
                
            </div>
        </footer>
    );
  }
  