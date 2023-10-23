import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Examining the impact of Domestic and International Prices on the proportion of Non-Performing Assets in Public Sector Banks of India: 1996-2020",
    description: "Conducted a comprehensive study analyzing the relationship between non-performing assets (NPA) and domestic as well as international prices in public sector banks of India. Utilized statistical analysis and data visualization techniques to assess the impact of variables such as gross advances, inflation rate, exchange rate, and changes in NPA since the implementation of the insolvency and bankruptcy code. Presented findings through insightful data visualizations and interpreted the results, providing valuable insights into the dynamics of NPAs in the banking sector.",
  },
  {
    title: "Project I Exist",
    description: "Led a podcast initiative aimed at creating a positive impact on society. Served as the Head of the Graphic Designing team, responsible for designing visually appealing graphics and promotional materials to enhance the podcast's brand identity.",
  },
  {
    title: "The Growth and Crisis of Non-Banking Financial Companies in India",
    description: "Conducted in-depth research and prepared a comprehensive research report on the functioning of Non-Banking Financial Companies in India. Explored the challenges, crisis, and issues faced by NBFCs in the Indian financial sector, analyzing their impact on the overall economy.",
  },
  {
    title: "External Sector (Economics)",
    description: "Conducted extensive research on the external sector of prominent economies, including China, India, and the USA, and assessed the impact of the COVID-19 pandemic on their external sector dynamics. Analyzed various factors such as trade, foreign exchange reserves, and international investments, providing insights into the economic consequences of the pandemic.",
  },
  {
    title: "VIDMUN (Model United Nations)",
    description: "Organized VIDMUN, a Model United Nations event held at MRIS Gurgaon. Successfully contacted and secured sponsorships from various organizations, demonstrating effective communication and negotiation skills. Led the Hospitality Committee, ensuring a seamless and engaging experience for all participants.",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard title={project.title} description={project.description} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
