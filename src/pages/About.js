import React from "react";
import "../styles/About.css";
import AboutImg from "../assets/about7.webp";

const About = () => {
  return (
    <div className="about" style={{ backgroundImage: `url(${AboutImg})` }}>
      {/* <div
        className="about-background-image"
        
      >
        
      </div> */}
      <div className="about-content">
          <h1>About Us</h1>
          <p>
            <p>
              Lorem ipsum dolor sit amet. Eos praesentium reprehenderit qui
              laborum voluptates et expedita assumenda in eveniet velit sed iure
              aperiam vel modi eius qui molestias dicta. Qui molestiae iure ut
              nostrum fugiat sed dolore similique est vitae dolorem non
              voluptatem cumque id dolore maxime. Est nisi ducimus At similique
              optio id voluptatem laborum.{" "}
            </p>
            <p>
              Ut assumenda commodi 33 libero quos ut omnis dicta et nisi modi
              vel dolorum consequatur. Et fugiat mollitia qui deserunt animi non
              minus possimus et adipisci voluptas et voluptatem blanditiis. Et
              consectetur voluptas a officia excepturi qui tempora dolores quo
              consectetur tempora in culpa internos sit saepe aliquid. Ut
              voluptatum enim a facilis illo est quaerat aliquam id voluptatem
              tempore.
            </p>
          </p>
        </div>
    </div>
  );
};

export default About;
