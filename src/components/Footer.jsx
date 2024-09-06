export default function Footer() {
    const styles = {
        bottom: 'max',
        position: 'fixed',
        margin: '0 auto'
      }
    return (
        <footer className="footer fixed-bottom py-3 bg-light mt-5" style={styles}>
            <div className="container text-center">
                <span className="text-muted">@Renz</span>
            </div>
        </footer>
    );
  }
  