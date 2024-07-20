import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";


export const Projects = () => {
  const projects = [
    {
      title: "Personal Website",
      description: "Web Development",
      imgUrl: projImg1,
      category: "web",
      details: `
        <p>This project is a comprehensive personal portfolio website designed and developed using React and Bootstrap. The website aims to showcase myself, my projects, and professional experience effectively.</p>
        <p><strong>Technologies Used:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> React, Bootstrap, JavaScript, HTML, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
        </ul>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li><strong>Dynamic Content:</strong> Implemented dynamic content rendering using React components and state management to provide a smooth user experience.</li>
          <li><strong>Animation and Effects:</strong> Integrated AOS (Animate on Scroll) library for scroll animations to enhance user engagement and interactivity.</li>
          <li><strong>Interactive Banner:</strong> Developed an interactive banner section with dynamic text effects using React hooks and custom JavaScript logic.</li>
          <li><strong>Form Handling:</strong> Implemented a contact form with client-side validation and server-side handling using Node.js and Express.js. The form sends emails to the specified address using the Nodemailer library.</li>
          <li><strong>SEO Optimization:</strong> Applied SEO best practices to improve the website's visibility on search engines, including meta tags, alt attributes for images, and proper heading hierarchy.</li>
        </ul>
        <p><strong>Challenges and Solutions:</strong></p>
        <ul>
          <li><strong>State Management:</strong> Managed complex state transitions and data flow using React hooks, ensuring seamless updates and rendering of components.</li>
          <li><strong>Form Validation:</strong> Implemented robust form validation to handle various input scenarios and provide real-time feedback to users.</li>
          <li><strong>Performance Optimization:</strong> Optimized the performance by lazy loading images, minifying CSS and JavaScript files, and leveraging browser caching.</li>
        </ul>`
    },
    {
      title: "Simulated Gitlet",
      description: "Backend Development (In Progress)",
      imgUrl: projImg2,
      category: "backend",
      details: `
        <p>This project is a backend development effort to simulate Gitlet, a simplified version of Git. The project aims to provide a basic understanding of version control systems and how they function internally.</p>
        <p><strong>Technologies Used:</strong></p>
        <ul>
          <li><strong>Backend:</strong> Java</li>
          <li><strong>Version Control:</strong> Git</li>
        </ul>
        <p><strong>Current Progress:</strong></p>
        <ul>
          <li><strong>Initialization (init):</strong> Implemented the init command which sets up a new Gitlet version control system in the current directory. This includes creating necessary directories and initializing the required data structures to manage the repository.</li>
        </ul>
        <p><strong>Key Features to Implement:</strong></p>
        <ul>
          <li><strong>Add (add):</strong> Develop the add command to stage files for the next commit, allowing users to track changes to specific files.</li>
          <li><strong>Commit (commit):</strong> Implement the commit command to save the current state of the staged files, creating a new snapshot in the repository history.</li>
          <li><strong>Remove (rm):</strong> Add the remove command to unstage files and remove them from the working directory.</li>
          <li><strong>Log (log):</strong> Develop the log command to display the history of commits starting from the current head.</li>
          <li><strong>Checkout (checkout):</strong> Implement the checkout command to restore files to the state they were in at a specific commit.</li>
          <li><strong>Branch Management:</strong> Implement commands for branch creation, deletion, and switching, such as branch, rm-branch, and checkout branch.</li>
          <li><strong>Merge (merge):</strong> Develop the merge command to combine changes from different branches, handling conflicts and maintaining repository integrity.</li>
          <li><strong>Rebase (rebase):</strong> Add the rebase command to integrate changes from one branch onto another, providing a linear commit history.</li>
        </ul>
        <p><strong>Challenges and Solutions:</strong></p>
        <ul>
          <li><strong>Data Structure Management:</strong> Managing complex data structures to efficiently handle various Git operations and maintain the integrity of the repository.</li>
          <li><strong>Performance Optimization:</strong> Ensuring that the implementation is efficient in terms of time and space complexity, particularly for large repositories with many files and commits.</li>
          <li><strong>Testing and Debugging:</strong> Implementing comprehensive tests using JUnit to ensure the correctness of each command and handle edge cases effectively.</li>
        </ul>`
    }
  ];

  const filterProjects = (category) => {
    return projects.filter(project => project.category === category);
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Below is a showcase of my key projects, each demonstrating my expertise in different areas of software development. These projects highlight my ability to design, develop, and maintain robust applications, utilizing a diverse set of technologies and best practices.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="web">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="backend">Backend</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="web">
                  <Row>
                    {filterProjects("web").map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="backend">
                  <Row>
                    {filterProjects("backend").map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
