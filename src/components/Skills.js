import python1 from "../assets/img/python-seeklogo.png";
import visual from "../assets/img/visual-studio-code-seeklogo.svg";
import java1 from "../assets/img/java-seeklogo.svg";
import js1 from "../assets/img/javascript-js-logo-2949701702-seeklogo.com.png";
import jupy from "../assets/img/jupyter-seeklogo.svg";
import boot from "../assets/img/bootstrap-5-seeklogo.svg";
import cs3 from "../assets/img/css3-seeklogo.svg";
import react1 from "../assets/img/react-seeklogo.svg";
import gith from "../assets/img/github-mark-white.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills & Abilities</h2>
                        <p>I have strong organizational skills, including the ability to multi-task and prioritize my workload, I am detail- oriented, and I am driven to achieve results. I can think analytically, creatively, and independently.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={js1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={visual} alt="Image" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={jupy} alt="Image" />
                                <h5>Jupyter Notebook</h5>
                            </div>
                            <div className="item">
                                <img src={boot} alt="Image" />
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <img src={cs3} alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={react1} alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={gith} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
