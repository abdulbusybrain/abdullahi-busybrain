import { ArrowRight, ExternalLink, Code, Layers, Server } from "lucide-react";

import logo from "./img/logo.jpg";
import hero from "./img/hero.jpg";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-sm font-bold uppercase text-gray-800">
            <div>Abdullahi</div>
            <div>Auwal</div>
            <div>Haruna</div>
          </div>
        </div>
        <nav className="flex space-x-6">
          <a
            href="#work"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            My Work
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 max-w-6xl mx-auto px-4 flex items-center"
    >
      <div className="w-1/2 pr-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Full Stack Developer <br />
          Creating Digital Solutions
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          I design and develop robust web applications that transform complex
          challenges into elegant, efficient solutions.
        </p>
        <a
          href="#work"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work <ArrowRight className="ml-2" />
        </a>
      </div>
      <div className="w-1/2">
        <img src={hero} alt="Hero Visual" className="rounded-lg shadow-xl" />
        <p className="mt-4 text-sm text-gray-600 text-center">
          @ DevFest Ilorin Kwara State 2024
        </p>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "Full-featured e-commerce solution with secure payment integration and responsive design.",
      image: "/api/placeholder/400/300",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Project Management Tool",
      technologies: ["React", "GraphQL", "PostgreSQL", "Docker"],
      description:
        "Collaborative project management application with real-time updates and task tracking.",
      image: "/api/placeholder/400/300",
      link: "https://example.com/project-management",
    },
  ];

  return (
    <section id="work" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        My Featured Projects
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex items-center mb-16 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="w-1/2 p-8">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <div className="flex space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Project <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="text-blue-600" size={36} />,
      title: "Web Development",
      description:
        "Custom web application development using modern technologies.",
    },
    {
      icon: <Layers className="text-blue-600" size={36} />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from frontend to backend infrastructure.",
    },
    {
      icon: <Server className="text-blue-600" size={36} />,
      title: "API Integration",
      description:
        "Seamless third-party API integrations and microservices architecture.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex">
        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Services I Provide
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Delivering high-quality digital solutions tailored to your business
            needs.
          </p>
        </div>
        <div className="w-1/2 grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg flex items-center space-x-6"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-4 flex">
      <div className="w-1/2 pr-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Want to Work Together?
        </h2>
        <p className="text-gray-600 mb-8">
          I'm always open to discussing product design work or partnership
          opportunities.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:contact@abdullahiauwal.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <h3 className="text-2xl font-semibold mb-6">How I Handle Projects</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Collaborative Approach</h4>
            <p className="text-gray-600 text-sm">
              I work closely with clients, ensuring clear communication and
              transparency throughout the project lifecycle.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Agile Methodology</h4>
            <p className="text-gray-600 text-sm">
              Implementing iterative development with regular updates and
              flexible scope management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Abdullahi Auwal Haruna</h3>
          <p className="text-gray-400 mt-2">Fronten Developer</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
