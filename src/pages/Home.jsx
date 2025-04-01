import FloatNav from "../components/FloatNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import "/src/styles/style.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Section id="home" className="presentation">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "15px",
            }}
          >
            <h1>Hi, I'm Gutemberg</h1>
            <h3
              style={{
                maxWidth: "700px",
                textAlign: "center",
              }}
            >
              I work as full stack developer 1+ years creating high performance
              applications with flexible scalability and using the latest
              technologies.
            </h3>
          </div>
        </Section>
        <Section id="about" className="about">
          <div className="about-title">
            <h1>About me</h1>
            <p></p>
          </div>
          <div className="stack">
            <div className="about-presentation">
              I work as back-end developer for 1+ years, graduated in Computer
              Science and passionate to create new thins about technology. I'm
              always looking for new challenges and learning new technologies. I
              really like work with Java and it's framework Spring Boot. I
              already worked with Docker and messageria service RabbitMQ.
            </div>
            <div className="techs">
              <span>Java</span> <span>Python</span>
              <span>NodeJS</span>
              <span>PHP</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
              <span>RabbitMQ</span>
            </div>
          </div>
        </Section>

        <Section id="projects" className="projects">
          <div className="projects-list">
            <img src="/src/assets/notebook_screen.jpg"></img>
          </div>
        </Section>

        <Section id="contact" className="contact-section">
          <div className="contact">
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <input name="" type="submit" />
            </form>
          </div>
        </Section>
        <Footer>
          <div className="personal-info">
            <span>E-mail: gutemberg.cz@gmail.com</span>
            <span>Phone number: +55 83 9 9194-7266</span>
          </div>
          <div className="social-medias">
            <a href="">Github</a>
            <a href="">LinkedIn</a>
          </div>
        </Footer>

        <FloatNav>
          <div className="return-top">
            <a href="/#home">
              <img src="/src/assets/back-top.png" alt="return-top" />
            </a>
          </div>
          <div className="my-cv">
            <a
              href="/src/assets/Gutemberg Ferreira Dantas - Desenvolvedor Back-End.pdf"
              download
              class="cv-icon"
            >
              CV
            </a>
          </div>
        </FloatNav>
      </div>
    </>
  );
};

export default Home;
