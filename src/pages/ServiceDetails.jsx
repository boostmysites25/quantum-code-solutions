import React from "react";
import { useParams, Link } from "react-router-dom";
import { allServices } from "../constant";
import SubHeading from "../components/SubHeading";
import SEO from "../components/SEO";
import { servicesSeoData } from "../seoData";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);

const ServiceDetails = () => {
  const { slug } = useParams();

  // Find the service by slug
  const service = allServices.find((s) => s.slug === slug);

  // If service not found, show 404
  if (!service) {
    return (
      <>
        <WebsiteHeader />
        <PageBanner title="Service Not Found" />
        <section className="bg-background">
          <div className="wrapper py-[5rem] text-center">
            <h2 className="heading-2 mb-4">Service Not Found</h2>
            <p className="desc mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link to="/services" className="primary-btn">
              Back to Services
            </Link>
          </div>
        </section>
        <WebsiteFooter />
      </>
    );
  }

  const ServiceIcon = service.icon;

  // Get SEO data for this service
  const seoData = servicesSeoData[slug] || {
    title: `${service.title} | Quantum Code Solutions`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, software development, quantum code solutions`,
    canonicalUrl: `https://quantumcodesolutions.com/services/${slug}`
  };

  return (
    <>
      <SEO {...seoData} />
      <WebsiteHeader />
      <PageBanner title={service.title} desc={service.description} />

      {/* Service Hero Section */}
      <section className="bg-background">
        <div className="wrapper py-[3rem] md:py-[5rem]">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-6" data-aos="fade-up">
              <div className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] flex justify-center items-center bg-secondary/10 rounded-full shadow-lg">
                <ServiceIcon className="w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] fill-secondary" />
              </div>
            </div>
            <h2 className="heading-2 mb-4 px-4" data-aos="fade-up" data-aos-delay="100">{service.detailHeading}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 px-4" data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact-us" className="primary-btn">
                Get Started Today
              </Link>
              {service.link && (
                <Link to={service.link} className="secondary-btn">
                  View Landing Page
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="bg-secondary/5">
        <div className="wrapper py-[3rem] md:py-[5rem]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl border border-secondary/10" data-aos="fade-up" data-aos-delay="100">
              <div
                className="service-detail-content"
                dangerouslySetInnerHTML={{ __html: service.detailContent }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/20"></div>
        <div className="wrapper py-[4rem] md:py-[6rem] text-center relative z-10">
          <h2 className="heading-2_2 mb-6 px-4" data-aos="fade-up">
            Ready to Transform Your Business?
          </h2>
          <p className="sub-heading mb-10 max-w-4xl mx-auto px-4 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Let's discuss how our {service.title.toLowerCase()} services can
            help drive your business forward with innovative solutions that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contact-us"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium cursor-pointer tracking-wide text-sm hover:shadow-2xl hover:-translate-y-1 shadow-xl rounded-xl px-8 py-4 min-w-[12rem] flex justify-center text-center transition-all duration-300 transform"
            >
              Contact Us Today
            </Link>
            <Link
              to="/about-us"
              className="bg-transparent border-2 border-background text-background font-medium cursor-pointer tracking-wide text-sm hover:bg-background hover:text-primary hover:-translate-y-1 shadow-xl rounded-xl px-8 py-4 min-w-[12rem] flex justify-center text-center transition-all duration-300 transform"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-background">
        <div className="wrapper py-[4rem] md:py-[6rem]">
          <div className="text-center flex flex-col items-center mb-12 md:mb-16 px-4">
            <SubHeading heading="Other Services" />
            <h2 className="heading-2 mt-4" data-aos="fade-up">Explore Our Other Solutions</h2>
            <p className="desc mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Discover more ways we can help transform your business with our comprehensive range of digital solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {allServices
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <div
                    key={relatedService.id}
                    className="bg-white hover:bg-primary group hover:text-background transition-all duration-500 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl border border-secondary/10 transform hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-[7rem] h-[7rem] flex justify-center items-center relative mx-auto mb-6 bg-secondary/10 group-hover:bg-secondary/20 rounded-2xl transition-all duration-300">
                      <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-500 bg-secondary rounded-2xl"></div>
                      <RelatedIcon className="z-[2] w-[4rem] h-[4rem] fill-primary group-hover:fill-background transition-all duration-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-background transition-colors duration-300">
                      {relatedService.title}
                    </h3>
                    <p className="desc mb-8 text-sm md:text-base leading-relaxed group-hover:text-background/90 transition-colors duration-300">
                      {relatedService.description}
                    </p>
                    <Link
                      to={`/services/${relatedService.slug}`}
                      className="group-hover:bg-secondary group-hover:border-secondary text-white font-medium cursor-pointer tracking-wide bg-primary border-2 border-primary text-sm hover:shadow-xl hover:-translate-y-1 shadow-lg rounded-xl px-6 py-3 min-w-[10rem] flex justify-center text-center transition-all duration-300 w-full mx-auto"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default ServiceDetails;
