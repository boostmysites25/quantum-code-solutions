import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/about-img1.webp";
import SEO from "../components/SEO";
import { seoData } from "../seoData";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Fueling digital transformations that inspire growth.
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Quantum Code Solutions
                </span>
                , we empower businesses to scale smarter through future-ready
                technology. With innovation at our core, we create customized
                digital solutions that solve real-world challenges—whether
                you're launching, growing, or redefining your presence.
                <br />
                <br />
                Our mission is to lead the shift into next-generation
                tech—bringing clarity, strategy, and creativity to every
                solution.
                <br />
                <br />
                We believe in blending technology with purpose. We craft digital
                experiences that reflect your brand's voice and amplify your
                vision.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-[5rem]">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <SubHeading heading="Our Values" />
            </div>
            <h2 data-aos="fade-up" className="heading-2 max-w-[60rem] mx-auto">
              The spark behind every breakthrough.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="desc mt-4 max-w-[50rem] mx-auto"
            >
              At{" "}
              <span className="font-semibold text-primary">
                Quantum Code Solutions
              </span>
              , we are driven by:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center p-6 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Curiosity
              </h3>
              <p className="desc text-sm">
                We question, we explore, we innovate—always reaching higher.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center p-6 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Partnership
              </h3>
              <p className="desc text-sm">
                Your success is ours. We build relationships, not just products.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center p-6 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Value</h3>
              <p className="desc text-sm">
                We create measurable impact with scalable, intelligent
                solutions.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-center p-6 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Evolution
              </h3>
              <p className="desc text-sm">
                Tech never sleeps, and neither do we. We keep you one step
                ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
