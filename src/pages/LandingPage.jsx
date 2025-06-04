import React, { lazy } from "react";
import vid from "../assets/vids/banner.mp4";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/services/app-dev.webp";
import webDevAboutImg from "../assets/images/services/web-dev.webp";
import ReactPlayer from "react-player";
import LeadForm from "../components/LeadForm";
import SEO from "../components/SEO";
import { landingPageSeoData } from "../seoData";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    services = webDevelopmentServices;
  } else {
    services = appDevelopmentServices;
  }

  // Get SEO data for this landing page
  const seoData = landingPageSeoData[page] || {
    title: `${page.replace('-', ' ')} Services | Quantum Code Solutions`,
    description: `Professional ${page.replace('-', ' ')} services from Quantum Code Solutions`,
    keywords: `${page.replace('-', ' ')}, software development, quantum code solutions`,
    canonicalUrl: `https://quantumcodesolutions.com/${page}`
  };

  return (
    <>
      <SEO {...seoData} />
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/50 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Quantum Code Solutions
              </span>
            </p>
            <h1 className="heading whitespace-pre-line capitalize">
              {isWebLanding
                ? "Building the Digital Backbone"
                : "Crafting Seamless Mobile Experiences"}
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              {isWebLanding
                ? `We're dedicated to crafting captivating websites that elevate your brand's presence in the digital realm.`
                : `Our app development expertise ensures your mobile journey is nothing short of extraordinary.`}
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <ContactForm isGrid={true} />
      <section id="about" className="text-primary_text wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Crafting Websites That Speak Volumes"
                  : "Your App Should Stand Out In A World Of Apps"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Your website is more than just a digital presence—it’s the face of your brand. We craft visually stunning, high-performing websites that engage users and drive results. Whether it’s a sleek portfolio, a dynamic e-commerce platform, or a custom web application, our sites are built to impress and perform flawlessly across all devices."
                  : "In today’s app-driven world, standing out is essential. We build mobile applications that blend elegant design with powerful functionality. From native iOS and Android apps to seamless cross-platform solutions, our apps are tailored to your vision and optimized for performance, usability, and business impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Transform Your Online Presence With Our Expertise"
            : "Empowering Businesses Through Innovative App Solutions"}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-secondary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
