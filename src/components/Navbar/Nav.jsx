export default function Nav({ links }) {

    const styles = {
      navStyle: {
        position: 'fixed',
        top: 0,
        width: '100%'
      }
    }

    return (
      <nav className="navbar navbar-expand-lg bg-secondary" style={styles.navStyle}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }