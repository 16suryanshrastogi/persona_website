import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot (3).png";
import projImg2 from "../assets/img/w5J1V.png";
import projImg3 from "../assets/img/hq720 (1).png";
import projImg4 from "../assets/img/SAS.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "YouTube Video Downloader",
      description: "Designed and developed a Front-End web application to download videos from YouTube for offline viewing.",
      imgUrl: projImg1,
    },
    {
      title: "NextWord Prediction Model",
      description: "Developed a language modelling task in machine learning that aims to predict the most probable word or sequence of words that follows a given input context",
      imgUrl: projImg2,
    },
    {
      title: "Gesture Volume Control",
      description: "Developed a system that allows users to adjust device volume using hand gestures.",
      imgUrl: projImg3,
    },
    {
      title: "Smart Attendance System",
      description: " Built a machine learning based smart attendance system using face recognition with OpenCV.",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a selection of projects that showcase my skills, creativity, and dedication to solving real-world challenges. Each project represents a unique journey where I applied my expertise in Java Programmimg, Web development, Machine Learning to create impactful solutions. Whether it's a Software, Web applications or Language models, my goal was to design and develop innovative and user-centric solutions that address specific needs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am planning to start a new project in the near future. Once initiated, I will work towards completing key milestones to ensure it aligns with my broader professional goals, and I am excited to apply my expertise to bring projects to life.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am planning to start a new project in the near future. Once initiated, I will work towards completing key milestones to ensure it aligns with my broader professional goals, and I am excited to apply my expertise to bring projects to life.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
