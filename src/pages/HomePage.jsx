
export default function HomePage() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-12">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>WHO AM I?</h3>
                <p className="lead mb-0">
                  A short summary about me
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ul>
        <li>
        👋 Hi, I’m @renzsupnet
        </li>
        <li>
        👀 I’m interested in a programming job/ games
        </li>
        <li>
        🌱 I’m currently learning Coding @ UCI Coding Bootcamp
        </li>
        <li>
        🎓 I have a Bachelor of Science Degree in Information Technology
        </li>
        <li>
        👓Graduated as Magna cum laude from the University of the Cordilleras, Baguio City, Philippines
        </li>
      </ul>
    </div>
  );
}
