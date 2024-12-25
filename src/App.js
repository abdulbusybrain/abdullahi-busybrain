import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Code, Layers, Server } from "lucide-react";

// Images
import hero from "./img/hero.jpg";
import kwadagoHero from "./img/kwadago.png";
import gajamiaHero from "./img/gajamia.png";
import foodiHero from "./img/FOODI.png";

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
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolling(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-transform duration-300 ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/">
            <div className="text-xs sm:text-sm font-bold uppercase">
              <div className="px-1">Abdullahi</div>
              <div className="px-1">Auwal</div>
              <div className="px-1">Haruna</div>
            </div>
          </a>
        </div>
        <nav className="flex space-x-4 sm:space-x-6">
          {["Work", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-black font-medium hover:bg-[${brightYellow}] px-2 py-1 transition-colors duration-300 rounded ${
                activeSection === item.toLowerCase()
                  ? `bg-[${brightYellow}]`
                  : ""
              }`}
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
      className="pt-28 pb-16 max-w-6xl mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
          <span className={`bg-[${brightYellow}]`}>Frontend Developer</span> /{" "}
          <br />
          <span className={`bg-[${brightYellow}] px-2`}>Web Designer</span>
        </h1>
        <p className="mb-8 leading-relaxed text-base sm:text-lg">
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
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
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
      title: "KWADAGO (Job Application Platform)",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
      description:
        "A streamlined digital platform connecting job seekers with employers, enabling easy application submissions while providing powerful tools for resume management, job tracking, and professional networking in one cohesive ecosystem.",
      image: kwadagoHero,
      link: "https://kwadago.vercel.app/",
      ongoing: false,
    },
    {
      title: "GA JAMI'A (Education Commerce)",
      technologies: ["React", "Firebase", "Tailwind"],
      description:
        "An education-commerce platform with secure user login and logout functionality. It offers a seamless experience for purchasing educational materials, accessing courses, and managing user accounts. Features include responsive design, secure payment integration, and personalized user dashboards.",
      image: gajamiaHero,
      link: "https://gajamia.vercel.app/",
      ongoing: true,
    },
    {
      title: "FOODI (Restaurant Website)",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
      description:
        "A beautifully designed landing page showcasing the restaurant's ambiance, menu, and special offers. Features include high-quality images, customer reviews, online reservations, and contact information to attract and engage potential diners.",
      image: foodiHero,
      link: "https://abdul-busybrain.github.io/foodi/",
      ongoing: false,
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
          className="relative flex flex-col md:flex-row items-center mb-16 bg-white rounded-lg shadow-md overflow-hidden border-4 border-black"
        >
          {project.ongoing && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              Ongoing Project
            </div>
          )}
          <div className="w-full md:w-1/2 p-8">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-xl border-2 border-black"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              <span className={`bg-[${brightYellow}] `}>{project.title}</span>
            </h3>
            <div className="flex flex-wrap space-x-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black text-white rounded-full text-sm mb-2"
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
      title: "Web Design & Development",
      description:
        "Designing user interfaces and experiences using tools like Figma to create wireframes, prototypes, and high-fidelity designs.",
    },
    {
      icon: <Server className="text-black" size={36} />,
      title: "E-commerce Development",
      description:
        "Developing e-commerce websites with features like product listings, shopping carts, and payment gateways.",
    },
    {
      icon: <Layers className="text-black" size={36} />,
      title: "Content Management Systems (CMS)",
      description:
        "Customizing and developing websites using WordPress, including theme development and plugin integration.",
    },
    {
      icon: <Server className="text-black" size={36} />,
      title: "SEO Optimization",
      description:
        "Implementing best practices for search engine optimization to improve website visibility and ranking on search engines.",
    },

    {
      icon: <Code className="text-black" size={36} />,
      title: "Custom Web Applications",
      description:
        "Developing custom web applications tailored to specific business needs using modern web technologies.",
    },
  ];

  return (
    <section id="services" className={`py-16 bg-[${softBeige}]`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            <span className="">Services I Provide</span>
          </h2>
          <p className="leading-relaxed">
            Delivering high-quality digital solutions tailored to your business
            needs.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex items-center space-x-6 border-4 border-black"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className={`bg-[${brightYellow}]`}>
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
      className={`py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row bg-[${softBeige}]`}
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">
          <span className="">Want to Work Together?</span>
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

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-6">
          <span className="px-1">How I Handle Projects</span>
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "User-Centric Design",
              description:
                "Conversion-focused interfaces that drive engagement and sales. Data-driven design decisions to improve user retention and boost customer satisfaction metrics.",
            },
            {
              title: "Collaborative Approach",
              description:
                "Strategic partnership focused on ROI and business goals. Regular meetings and clear communication to ensure your project delivers measurable value and meets market demands.",
            },
            {
              title: "Continuous Learning",
              description:
                "Investment in the best technologies and industry best practices, in order to implement better solutions that place your business in a better position.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border-4 border-black"
            >
              <h4 className="font-medium mb-2">
                <span className={`bg-[${brightYellow}] px-1`}>
                  {item.title}
                </span>
              </h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/abdul-busybrain",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/abdullahi-auwal-haruna-3b298422b",
    },
    {
      name: "X",
      url: "https://x.com/abdul-busybrain",
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+2348064676821",
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">
            <span className={`bg-[${brightYellow}]`}>
              Abdullahi Auwal Haruna
            </span>
          </h3>
          <p className="mt-2">Frontend Developer / Web Designer</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          {socialLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:bg-[${brightYellow}] hover:text-yellow-600 px-2 py-1 transition-colors duration-300`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default App;
