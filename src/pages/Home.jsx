import React from "react";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/App Development.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/Machine Learning Solutions.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";
import SEO from "../components/SEO";
import { seoData } from "../seoData";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <SEO {...seoData.home} />
      <WebsiteHeader />
      <section className="h-screen banner relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/50 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Quantum Code Solutions
              </span>
            </p>
            <h1 className="heading capitalize">
              Transforming Ideas into Digital Realities
            </h1>
            <p className="sub-heading max-w-6xl">
              Embark on your AI-driven transformation with Quantum Code
              Solutions. Our cutting-edge IT services empower your business to
              lead and thrive in today’s competitive landscape.
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
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            Create visually stunning and user-friendly websites that engage and
            captivate your audience.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Mobile App Development
            </p>
          </div>
          <p className="desc">
            Develop mobile applications that deliver exceptional user
            experiences across platforms.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              AI & Machine Learning
            </p>
          </div>
          <p className="desc">
            Develop machine learning models that drive intelligent
            decision-making and automate processes.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full object-center"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">
                    Quantum Code Solutions
                  </span>
                  , we specialize in delivering innovative solutions across
                  multiple domains, including App Development, AI & Machine
                  Learning, Web Development, UI/UX Design, Game Development,
                  Blockchain, Cloud Computing, and Robotic Process Automation.
                  Our mission is to empower businesses by turning complex
                  challenges into seamless digital experiences.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices length={3} />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
