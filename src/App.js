import { ArrowRight, ExternalLink, Code, Layers, Server } from "lucide-react";

import logo from "./img/logo.jpg";
import hero from "./img/hero.jpg";
import kwadagoHero from "./img/kwadago.png";
import gajamiaHero from "./img/gajamia.png";

const softBeige = "#f9efe7";
const brightYellow = "#ffe872";

const App = () => {
  return (
    <div className={`bg-[${softBeige}] min-h-screen text-gray-900`}>
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
            className="w-12 h-12 rounded-full object-cover border-2 border-black"
          />
          <div className="text-sm font-bold uppercase">
            <div className="px-1">Abdullahi</div>
            <div className="px-1">Auwal</div>
            <div className="px-1">Haruna</div>
          </div>
        </div>
        <nav className="flex space-x-6">
          {["Work", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-black font-medium hover:bg-[${brightYellow}] px-2 py-1 transition-colors duration-300 rounded`}
            >
              {item}
            </a>
          ))}
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
        <h1 className="text-5xl font-bold mb-6">
          <span className={`bg-[${brightYellow}] px-2`}>
            Frontend Developer
          </span>{" "}
          / <br />
          <span className={`bg-[${brightYellow}] px-2`}>Web Designer</span>
        </h1>
        <p className="mb-8 leading-relaxed">
          Results-driven Frontend Web Developer with expertise in building
          responsive, user-centric web applications. Skilled in modern
          JavaScript frameworks and UI/UX best practices, with a strong focus on
          performance optimization, accessibility, and SEO.
        </p>
        <a
          href="#work"
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          see my work <ArrowRight className="ml-2" />
        </a>
      </div>
      <div className="w-1/2">
        <img
          src={hero}
          alt="Hero Visual"
          className="rounded-lg shadow-xl border-4 border-black"
        />
        <p className={`mt-4 text-sm text-center bg-[${brightYellow}] px-2`}>
          @ DevFest Ilorin Kwara State 2024
        </p>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: "GA JAMI'A (Education Commerce)",
      technologies: ["React", "Firebase", "Tailwind"],
      description:
        "Full-featured e-commerce solution with secure payment integration and responsive design.",
      image: gajamiaHero,
      link: "https://gajamia.vercel.app/",
    },
    {
      title: "KWADAGO (Job Application Platform)",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
      description:
        "Collaborative project management application with real-time updates and task tracking.",
      image: kwadagoHero,
      link: "https://kwadago.vercel.app/",
    },
  ];

  return (
    <section
      id="work"
      className={`py-16 max-w-6xl mx-auto px-4 bg-[${softBeige}]`}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className=" px-2">Featured Projects</span>
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex items-center mb-16 bg-white rounded-lg shadow-md overflow-hidden border-4 border-black"
        >
          <div className="w-1/2 p-8">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-xl border-2 border-black"
            />
          </div>
          <div className="w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              <span className={`bg-[${brightYellow}] px-1`}>
                {project.title}
              </span>
            </h3>
            <div className="flex space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mb-6">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
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
      icon: <Code className="text-black" size={36} />,
      title: "Web Development",
      description:
        "Custom web application development using modern technologies.",
    },
    {
      icon: <Server className="text-black" size={36} />,
      title: "Production Design",
      description:
        "Seamless third-party API integrations and microservices architecture.",
    },
    {
      icon: <Layers className="text-black" size={36} />,
      title: "Wordpress Development",
      description:
        "End-to-end development from frontend to backend infrastructure.",
    },
    {
      icon: <Server className="text-black" size={36} />,
      title: "SEO / Digital Marketing",
      description:
        "Seamless third-party API integrations and microservices architecture.",
    },
  ];

  return (
    <section id="services" className={`py-16 bg-[${softBeige}]`}>
      <div className="max-w-6xl mx-auto px-4 flex">
        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className=" px-2">Services I Provide</span>
          </h2>
          <p className="leading-relaxed">
            Delivering high-quality digital solutions tailored to your business
            needs.
          </p>
        </div>
        <div className="w-1/2 grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex items-center space-x-6 border-4 border-black"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className={`bg-[${brightYellow}] px-1`}>
                    {service.title}
                  </span>
                </h3>
                <p>{service.description}</p>
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
    <section
      id="contact"
      className={`py-16 max-w-6xl mx-auto px-4 flex bg-[${softBeige}]`}
    >
      <div className="w-1/2 pr-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className=" px-2">Want to Work Together?</span>
        </h2>
        <p className="mb-8">
          I'm always open to discussing product design work or partnership
          opportunities.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:contact@abdullahiauwal.com"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <h3 className="text-2xl font-semibold mb-6">
          <span className=" px-1">How I Handle Projects</span>
        </h3>
        <div className="space-y-4">
          {["Collaborative Approach", "Agile Methodology"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border-4 border-black"
              >
                <h4 className="font-medium mb-2">
                  <span className={`bg-[${brightYellow}] px-1`}>{title}</span>
                </h4>
                <p className="text-sm">
                  {title === "Collaborative Approach"
                    ? "I work closely with clients, ensuring clear communication and transparency throughout the project lifecycle."
                    : "Implementing iterative development with regular updates and flexible scope management."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">
            <span className={`bg-[${brightYellow}] text-black px-1`}>
              Abdullahi Auwal Haruna
            </span>
          </h3>
          <p className="mt-2">Frontend Developer / Web Designer</p>
        </div>
        <div className="flex space-x-4">
          {["GitHub", "LinkedIn", "Email"].map((link, index) => (
            <a
              key={index}
              href="#"
              className={`hover:bg-[${brightYellow}] hover:text-black px-2 py-1 transition-colors duration-300`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default App;
