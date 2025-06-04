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
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="wrapper py-[4rem] md:py-[6rem] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6" data-aos="fade-up">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] flex justify-center items-center bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-secondary/20">
                    <ServiceIcon className="w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem] fill-secondary" />
                  </div>
                </div>
              </div>
              <h2 className="heading-2 mb-6 px-4 lg:px-0" data-aos="fade-up" data-aos-delay="100">
                {service.detailHeading}
              </h2>
              <p className="text-lg text-gray-600 mb-8 px-4 lg:px-0 leading-relaxed" data-aos="fade-up" data-aos-delay="150">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 lg:px-0" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact-us" className="group relative overflow-hidden bg-gradient-to-r from-secondary to-primary text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                {service.link && (
                  <Link to={service.link} className="group relative overflow-hidden bg-white border-2 border-secondary text-secondary font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-secondary hover:text-white">
                    <span className="relative z-10">View Landing Page</span>
                  </Link>
                )}
              </div>
            </div>
            
            {/* Right Side - Service Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="bg-gradient-to-b from-secondary/5 via-background to-primary/5 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1799AC 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #000F05 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="wrapper py-[4rem] md:py-[6rem] relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Content Header */}
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-3 rounded-full border border-secondary/20 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Service Details</span>
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                Everything You Need to Know
              </h3>
            </div>
            
            {/* Main Content Card */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="100">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-3xl blur-sm opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Content container */}
              <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-secondary/10">
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                
                {/* Service image in content */}
                <div className="relative mb-8 lg:mb-12" data-aos="zoom-in" data-aos-delay="200">
                  <div className="relative max-w-md mx-auto">
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="service-detail-content"
                    dangerouslySetInnerHTML={{ __html: service.detailContent }}
                  />
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-secondary/20 to-transparent text-center" data-aos="fade-up" data-aos-delay="300">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                      <ServiceIcon className="w-6 h-6 fill-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Ready to get started?</p>
                      <p className="font-semibold text-primary">Let's discuss your project</p>
                    </div>
                    <Link 
                      to="/contact-us" 
                      className="ml-4 bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-secondary/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-secondary/30 rotate-12 animate-pulse"></div>
        
        <div className="wrapper py-[5rem] md:py-[7rem] text-center relative z-10">
          {/* Header with Icon */}
          <div className="flex justify-center mb-8" data-aos="zoom-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <ServiceIcon className="w-10 h-10 fill-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 px-4 text-white" data-aos="fade-up">
            Ready to Transform Your Business?
          </h2>
          
          <div className="max-w-4xl mx-auto mb-10 px-4" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Let's discuss how our <span className="font-semibold text-secondary">{service.title.toLowerCase()}</span> services can
              help drive your business forward with innovative solutions that deliver real results.
            </p>
          </div>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contact-us"
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:shadow-secondary/25 transform hover:-translate-y-2 transition-all duration-300 min-w-[12rem]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Us Today
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            
            <Link
              to="/about-us"
              className="group relative overflow-hidden bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:bg-white hover:text-primary transform hover:-translate-y-2 transition-all duration-300 min-w-[12rem]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Learn More About Us
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">99%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gradient-to-b from-background via-secondary/5 to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #1799AC 25%, transparent 25%),
                             linear-gradient(-45deg, #1799AC 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, #000F05 75%),
                             linear-gradient(-45deg, transparent 75%, #000F05 75%)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>
        
        <div className="wrapper py-[5rem] md:py-[7rem] relative z-10">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-20 px-4">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-3 rounded-full border border-secondary/20 mb-6" data-aos="fade-up">
              <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></div>
              <SubHeading heading="Other Services" />
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="heading-2 mt-4 mb-6" data-aos="fade-up" data-aos-delay="100">
              Explore Our Other Solutions
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Discover more ways we can help transform your business with our comprehensive range of cutting-edge digital solutions.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {allServices
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <div
                    key={relatedService.id}
                    className="group relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-3xl blur-sm opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white hover:bg-gradient-to-br hover:from-primary hover:to-primary/90 group hover:text-white transition-all duration-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl border border-secondary/10 transform hover:-translate-y-3 overflow-hidden">
                      
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-16 -translate-y-16"></div>
                      
                      {/* Service Image */}
                      <div className="relative mb-6" data-aos="zoom-in" data-aos-delay={index * 100 + 200}>
                        <div className="relative mx-auto w-full max-w-[200px]">
                          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                          <div className="relative bg-white rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <img 
                              src={relatedService.image} 
                              alt={relatedService.title}
                              className="w-full h-32 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 flex justify-center items-center relative mx-auto mb-6 bg-gradient-to-br from-secondary/10 to-primary/10 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl transition-all duration-300">
                        <RelatedIcon className="w-8 h-8 fill-primary group-hover:fill-white transition-all duration-300" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                        {relatedService.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {relatedService.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Link
                        to={`/services/${relatedService.slug}`}
                        className="group/btn relative overflow-hidden bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-white text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full mx-auto flex items-center justify-center gap-2"
                      >
                        <span className="relative z-10">Learn More</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </Link>
                    </div>
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
