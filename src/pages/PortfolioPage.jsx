// This is a static page mocking an "About Us" section for our fake user data

export default function HomePage() {
    const cardStyle = {
        width: '100%',
        marginTop: '25px'
    }
    return (
      <div className="container">
        <div className="row">
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Quantum Rig</h5>
                    <p class="card-text">Quantum Rig is a full-stack web application that allows users to create and manage custom PC builds. Users can sign up, log in, and create personalized PC builds by selecting and commenting on various parts.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Tech Blog</h5>
                    <p class="card-text">This tech blog has been developed using express, sessions, bcrypt, sequalize, and handlebars. Certain routes are closed off from non members and require signing up before adding blog posts and/or commenting.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">JATE PWA</h5>
                    <p class="card-text">A simple text editor that is an installable PWA application</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">A challenge to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Note Taker</h5>
                    <p class="card-text">An Express JS application about taking notes and applying routing principles.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-6">
            <div class="card" style={cardStyle}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Web API Challenge</h5>
                    <p class="card-text">A challenge to create a blog that displays the title, content and author from localStorage.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
  }
  