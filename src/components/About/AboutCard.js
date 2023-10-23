import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavika Gupta </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br /> My journey began with a rock-solid foundation in mathematics and economics. However, it's my insatiable curiosity and unending passion for finance that truly set me on a remarkable path
            <br />
            ourney began with a rock-solid foundation in mathematics and economics. However, it's my insatiable curiosity and unending passion for finance that truly set me on a remarkable path
            <br />
            <br />
            Apart from this, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Finance Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do small things with great love, for it's in the details that we create a world of difference.{" "}
          </p>
          <footer className="blockquote-footer">Bhavika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
