import logoImg from "./assets/logo/logo.png";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Game Development.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Blockchain.svg";
import { ReactComponent as allServiceIcon7 } from "./assets/svgs/services/CRM Development.svg";
import { ReactComponent as allServiceIcon8 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as allServiceIcon9 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as allServiceIcon10 } from "./assets/svgs/services/Chatbots.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";
import { lazy } from "react";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));

export { logoImg };

export const companyDetails = {
  phone: "+917016569094",
  address: "B-70 Gopalnagar Society, Nr president college,  Kalol - 382721",
  email: "sale@quantumcodesolutions.com",
  linkedin: "https://www.linkedin.com/company/quantumcodesolutions/",
  instagram: "https://www.instagram.com/quantum.code.solutions/",
  facebook: "https://www.facebook.com/quantumcodesolutions",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
  {
    path: "/services/:slug",
    name: "Service Details",
    element: <ServiceDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Website Development",
    icon: webServiceIcon1,
    description:
      "Boost your online sales with custom e-commerce website development. We create scalable, secure, and user-friendly platforms optimized for conversions and seamless shopping experiences.",
  },
  {
    id: 2,
    title: "Social Media Website Development",
    icon: webServiceIcon2,
    description:
      "Build powerful social networking websites tailored to your audience. Our solutions enhance user engagement, improve retention, and support dynamic content sharing.",
  },
  {
    id: 3,
    title: "Landing Page Design & Development",
    icon: webServiceIcon3,
    description:
      "Design high-converting landing pages that drive leads and sales. We focus on fast load times, compelling CTAs, and optimized UX to maximize conversion rates.",
  },
  {
    id: 4,
    title: "Custom Website Development",
    icon: webServiceIcon4,
    description:
      "Get fully customized websites tailored to your brand and business objectives. From design to functionality, we build responsive and SEO-friendly websites that deliver real results.",
  },
];

export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development Services",
    icon: appServiceIcon1,
    description:
      "Develop high-performance iOS apps using Swift and Objective-C. We build sleek, secure, and scalable applications optimized for the Apple ecosystem and App Store success.",
  },
  {
    id: 2,
    title: "Android App Development Services",
    icon: appServiceIcon2,
    description:
      "Custom Android app development using Java and Kotlin. We deliver intuitive, high-quality Android apps aligned with your brand and user expectations.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Leverage Flutter for cost-effective cross-platform app development. We create fast, responsive apps for both iOS and Android from a single codebase, ensuring native performance.",
  },
  {
    id: 4,
    title: "Hybrid App Development Services",
    icon: appServiceIcon4,
    description:
      "Build mobile apps with unified codebases that work across iOS and Android. Our hybrid app development solutions ensure fast deployment, smooth UX, and reduced development cost.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sreya Kumar",
    position: "Marketing Director at Elements Labs",
    img: require("./assets/images/testimonial3.png"),
    desc: "They didn’t just build a site—they created an experience that drives engagement and converts better than before.",
  },
  {
    id: 2,
    name: "Rahul Shekhar",
    position: "CIO at Techno Minds",
    img: require("./assets/images/testimonial1.png"),
    desc: "Since moving to the cloud with them, we’ve seen better speed, fewer issues, and stronger collaboration across teams.",
  },
  {
    id: 3,
    name: "Amanda R",
    position: "Founder at 5GHomes",
    img: require("./assets/images/testimonial2.png"),
    desc: "The user experience overhaul was a total success. Our bounce rate dropped, and engagement shot up.",
  },
  {
    id: 4,
    name: "Arun Kumar",
    position: "COO at Think Reality",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "Their team understood our goals and delivered a secure, user-friendly blockchain solution that elevated our platform.",
  },
  {
    id: 5,
    name: "Priya S",
    position: "Director of Operations at Akash Mega Mart",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "Their automation solution handles the busy work so our team can focus on what really matters. A huge win.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "App Development",
    slug: "app-development",
    link: "/app-development",
    image: require("./assets/images/services/app-dev.webp"),
    description:
      "In today's mobile-first world, having a robust mobile application is crucial for business success.",
    icon: allServiceIcon1,
    detailHeading: "App Development: Crafting Seamless Mobile Experiences",
    detailContent: `
      <div class="service-detail-content">
        <h2>Transform Your Business with Custom Mobile Applications</h2>
        <p>In today's digital landscape, mobile applications have become the cornerstone of successful businesses. With over 6.8 billion smartphone users worldwide, having a robust mobile presence isn't just an advantage—it's essential for survival and growth. At Quantum Code Solutions, we specialize in creating cutting-edge mobile applications that not only meet your business objectives but exceed user expectations.</p>
        
        <h3>Our Comprehensive App Development Services</h3>
        
        <h4>1. iOS App Development</h4>
        <p>Our iOS development team leverages the latest Swift and Objective-C technologies to create stunning applications for iPhone, iPad, and Apple Watch. We follow Apple's Human Interface Guidelines to ensure your app provides an intuitive and engaging user experience. From concept to App Store deployment, we handle every aspect of iOS development including:</p>
        <ul>
          <li>Native iOS app development using Swift and Objective-C</li>
          <li>SwiftUI implementation for modern, declarative user interfaces</li>
          <li>Core Data integration for efficient data management</li>
          <li>CloudKit integration for seamless data synchronization</li>
          <li>Apple Pay integration for secure payment processing</li>
          <li>Push notification implementation</li>
          <li>App Store optimization and submission</li>
        </ul>
        
        <h4>2. Android App Development</h4>
        <p>Our Android development expertise spans across Java and Kotlin, ensuring your app performs optimally across the diverse Android ecosystem. We create applications that work seamlessly across different screen sizes, Android versions, and device specifications:</p>
        <ul>
          <li>Native Android development using Kotlin and Java</li>
          <li>Material Design implementation for consistent UI/UX</li>
          <li>Room database integration for local data storage</li>
          <li>Firebase integration for backend services</li>
          <li>Google Pay integration for payment processing</li>
          <li>Android Jetpack components utilization</li>
          <li>Google Play Store optimization and publishing</li>
        </ul>
        
        <h4>3. Cross-Platform Development</h4>
        <p>Maximize your reach while minimizing development costs with our cross-platform solutions. We utilize industry-leading frameworks to create applications that deliver native-like performance across multiple platforms:</p>
        <ul>
          <li>React Native development for near-native performance</li>
          <li>Flutter development for beautiful, fast applications</li>
          <li>Xamarin development for enterprise-grade solutions</li>
          <li>Progressive Web Apps (PWAs) for web-based mobile experiences</li>
          <li>Code sharing strategies to reduce development time</li>
          <li>Platform-specific optimizations</li>
        </ul>
        
        <h4>4. Enterprise Mobile Solutions</h4>
        <p>We understand the unique challenges faced by enterprise clients and provide robust, scalable solutions that integrate seamlessly with existing business systems:</p>
        <ul>
          <li>Enterprise app development with advanced security features</li>
          <li>Mobile Device Management (MDM) integration</li>
          <li>Single Sign-On (SSO) implementation</li>
          <li>API integration with existing enterprise systems</li>
          <li>Offline functionality for field workers</li>
          <li>Real-time data synchronization</li>
          <li>Compliance with industry standards (HIPAA, GDPR, etc.)</li>
        </ul>
        
        <h4>5. App Maintenance and Support</h4>
        <p>Our commitment doesn't end at launch. We provide comprehensive maintenance and support services to ensure your app continues to perform optimally:</p>
        <ul>
          <li>Regular app updates and feature enhancements</li>
          <li>Performance monitoring and optimization</li>
          <li>Bug fixes and security patches</li>
          <li>OS compatibility updates</li>
          <li>Analytics implementation and reporting</li>
          <li>User feedback integration</li>
          <li>24/7 technical support</li>
        </ul>
        
        <h3>Our Development Process</h3>
        <p>We follow an agile development methodology that ensures transparency, flexibility, and timely delivery. Our process includes detailed planning, iterative development, rigorous testing, and seamless deployment. We maintain constant communication with our clients throughout the development cycle, providing regular updates and incorporating feedback to ensure the final product exceeds expectations.</p>
        
        <h3>Why Choose Quantum Code Solutions?</h3>
        <p>With years of experience in mobile app development, our team has successfully delivered hundreds of applications across various industries including healthcare, finance, e-commerce, education, and entertainment. We combine technical expertise with creative innovation to create apps that not only function flawlessly but also provide exceptional user experiences that drive engagement and business growth.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    link: "/web-development",
    image: require("./assets/images/services/web-dev.webp"),
    description:
      "Your website is often the first impression customers have of your brand, making it crucial to get it right.",
    icon: allServiceIcon3,
    detailHeading: "Web Development: Building the Digital Backbone",
    detailContent: `
      <div class="service-detail-content">
        <h2>Professional Web Development Services That Drive Results</h2>
        <p>Your website serves as the digital face of your business, often forming the first impression potential customers have of your brand. In today's competitive online landscape, having a professionally designed and developed website isn't just important—it's essential for business success. At Quantum Code Solutions, we create powerful, responsive, and user-friendly websites that not only look stunning but also drive conversions and business growth.</p>
        
        <h3>Our Comprehensive Web Development Services</h3>
        
        <h4>1. Custom Website Development</h4>
        <p>We believe every business is unique, which is why we create custom websites tailored to your specific needs and objectives. Our custom development approach ensures your website stands out from the competition:</p>
        <ul>
          <li>Bespoke website design and development from scratch</li>
          <li>Custom functionality development to meet specific business requirements</li>
          <li>Scalable architecture that grows with your business</li>
          <li>Integration with third-party services and APIs</li>
          <li>Custom content management systems</li>
          <li>Database design and optimization</li>
          <li>Performance optimization for fast loading times</li>
        </ul>
        
        <h4>2. E-commerce Development</h4>
        <p>Transform your business with powerful e-commerce solutions that drive sales and enhance customer experience. We develop robust online stores that handle everything from product catalogs to payment processing:</p>
        <ul>
          <li>Custom e-commerce platform development</li>
          <li>Shopping cart and checkout optimization</li>
          <li>Payment gateway integration (PayPal, Stripe, Square, etc.)</li>
          <li>Inventory management systems</li>
          <li>Order tracking and management</li>
          <li>Customer account portals</li>
          <li>Multi-currency and multi-language support</li>
          <li>SEO optimization for product pages</li>
        </ul>
        
        <h4>3. Content Management Systems (CMS)</h4>
        <p>Empower your team to manage website content easily with our CMS solutions. We work with various platforms and can create custom solutions based on your needs:</p>
        <ul>
          <li>WordPress development and customization</li>
          <li>Drupal development for complex websites</li>
          <li>Custom CMS development</li>
          <li>Content migration and optimization</li>
          <li>User role management and permissions</li>
          <li>SEO-friendly content structure</li>
          <li>Multi-site management capabilities</li>
        </ul>
        
        <h4>4. Progressive Web Applications (PWAs)</h4>
        <p>Bridge the gap between web and mobile with Progressive Web Applications that offer app-like experiences through web browsers:</p>
        <ul>
          <li>Offline functionality for uninterrupted user experience</li>
          <li>Push notification capabilities</li>
          <li>Fast loading times with service workers</li>
          <li>Responsive design for all devices</li>
          <li>App-like navigation and interactions</li>
          <li>Automatic updates without app store submissions</li>
          <li>Cross-platform compatibility</li>
        </ul>
        
        <h4>5. Frontend Development</h4>
        <p>Create engaging user interfaces that captivate your audience and provide exceptional user experiences:</p>
        <ul>
          <li>React.js development for dynamic user interfaces</li>
          <li>Vue.js development for progressive applications</li>
          <li>Angular development for enterprise applications</li>
          <li>HTML5, CSS3, and JavaScript optimization</li>
          <li>Responsive design implementation</li>
          <li>Cross-browser compatibility testing</li>
          <li>Performance optimization and lazy loading</li>
        </ul>
        
        <h4>6. Backend Development</h4>
        <p>Build robust server-side solutions that power your web applications with reliability and scalability:</p>
        <ul>
          <li>Node.js development for scalable applications</li>
          <li>Python/Django development for complex systems</li>
          <li>PHP/Laravel development for rapid deployment</li>
          <li>Database design and optimization (MySQL, PostgreSQL, MongoDB)</li>
          <li>API development and integration</li>
          <li>Cloud infrastructure setup and management</li>
          <li>Security implementation and monitoring</li>
        </ul>
        
        <h4>7. Website Maintenance and Support</h4>
        <p>Keep your website running smoothly with our comprehensive maintenance and support services:</p>
        <ul>
          <li>Regular security updates and patches</li>
          <li>Performance monitoring and optimization</li>
          <li>Content updates and modifications</li>
          <li>Backup and disaster recovery</li>
          <li>SSL certificate management</li>
          <li>SEO monitoring and improvements</li>
          <li>24/7 technical support</li>
        </ul>
        
        <h3>Our Development Approach</h3>
        <p>We follow industry best practices and modern development methodologies to ensure your website is built to the highest standards. Our approach includes thorough planning, agile development, comprehensive testing, and seamless deployment. We prioritize security, performance, and user experience in every project we undertake.</p>
        
        <h3>Technologies We Use</h3>
        <p>Our team stays current with the latest web technologies and frameworks to deliver cutting-edge solutions. We work with modern tools and platforms including React, Vue.js, Angular, Node.js, Python, PHP, and various cloud platforms to ensure your website is built using the most appropriate and effective technologies for your specific requirements.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Machine Learning",
    slug: "machine-learning",
    image: require("./assets/images/services/ml.jpg"),
    description:
      "Machine Learning is revolutionizing industries across the globe with data-driven insights and automation.",
    icon: allServiceIcon2,
    detailHeading:
      "Machine Learning: Harnessing the Power of Data Intelligence",
    detailContent: `
      <div class="service-detail-content">
        <h2>Transform Your Business with Machine Learning</h2>
        <p>Machine Learning is no longer a futuristic concept—it's a powerful tool that is revolutionizing industries and transforming how businesses operate today. At Quantum Code Solutions, we harness the power of ML to help organizations automate processes, gain valuable insights from data, and create intelligent solutions that drive growth and innovation.</p>
        
        <h3>Our Machine Learning Services</h3>
        
        <h4>1. Predictive Analytics</h4>
        <p>Leverage historical data to predict future trends and make informed business decisions:</p>
        <ul>
          <li>Sales forecasting and demand prediction</li>
          <li>Customer behavior analysis and churn prediction</li>
          <li>Risk assessment and fraud detection</li>
          <li>Market trend analysis</li>
          <li>Inventory optimization</li>
          <li>Financial modeling and investment analysis</li>
          <li>Maintenance scheduling and equipment failure prediction</li>
        </ul>
        
        <h4>2. Natural Language Processing (NLP)</h4>
        <p>Enable systems to understand, interpret, and generate human language:</p>
        <ul>
          <li>Sentiment analysis for social media and customer feedback</li>
          <li>Text classification and document categorization</li>
          <li>Language translation services</li>
          <li>Content generation and summarization</li>
          <li>Voice recognition and speech-to-text conversion</li>
          <li>Information extraction from unstructured data</li>
          <li>Topic modeling and text clustering</li>
        </ul>
        
        <h4>3. Computer Vision</h4>
        <p>Extract meaningful information from visual data to automate image and video analysis:</p>
        <ul>
          <li>Object detection and recognition</li>
          <li>Image classification and segmentation</li>
          <li>Quality control and defect detection in manufacturing</li>
          <li>Medical image analysis</li>
          <li>Visual search capabilities</li>
          <li>Optical character recognition (OCR)</li>
          <li>Video analytics and motion detection</li>
        </ul>
        
        <h4>4. Recommendation Systems</h4>
        <p>Personalize user experiences and increase engagement with intelligent recommendation engines:</p>
        <ul>
          <li>Product recommendation for e-commerce platforms</li>
          <li>Content recommendation for media and entertainment</li>
          <li>Personalized marketing campaigns</li>
          <li>Job matching and recruitment optimization</li>
          <li>Learning path recommendations for education</li>
          <li>Investment and financial product recommendations</li>
          <li>Social network friend and connection suggestions</li>
        </ul>
        
        <h4>5. Anomaly Detection</h4>
        <p>Identify unusual patterns that do not conform to expected behavior:</p>
        <ul>
          <li>Fraud detection in financial transactions</li>
          <li>Network security and intrusion detection</li>
          <li>Manufacturing quality control</li>
          <li>System health monitoring</li>
          <li>Outlier detection in data analysis</li>
          <li>Predictive maintenance for equipment</li>
          <li>User behavior analysis for security</li>
        </ul>
        
        <h4>6. Deep Learning Solutions</h4>
        <p>Implement advanced neural networks for complex problem-solving:</p>
        <ul>
          <li>Convolutional Neural Networks (CNNs) for image processing</li>
          <li>Recurrent Neural Networks (RNNs) for sequence prediction</li>
          <li>Generative Adversarial Networks (GANs) for content creation</li>
          <li>Transformer models for language understanding</li>
          <li>Reinforcement learning for decision optimization</li>
          <li>Custom neural network architectures</li>
          <li>Model optimization and deployment</li>
        </ul>
        
        <h4>7. ML Strategy and Consulting</h4>
        <p>Develop comprehensive Machine Learning strategies aligned with your business objectives:</p>
        <ul>
          <li>ML readiness assessment and roadmap development</li>
          <li>Data strategy and infrastructure planning</li>
          <li>Technology stack selection and architecture design</li>
          <li>ROI analysis and business case development</li>
          <li>Team training and capability building</li>
          <li>Ethical ML implementation and governance</li>
          <li>Compliance and regulatory guidance</li>
        </ul>
        
        <h3>Our Machine Learning Development Process</h3>
        <p>We follow a systematic approach to ML development that ensures successful implementation and measurable results. Our process includes problem definition, data collection and preparation, model development and training, validation and testing, deployment, and continuous monitoring and improvement.</p>
        
        <h3>Industries We Serve</h3>
        <p>Our Machine Learning solutions have been successfully implemented across various industries including healthcare, finance, retail, manufacturing, education, and technology. We understand the unique challenges and requirements of different sectors and tailor our solutions accordingly.</p>
      </div>
    `,
  },

  {
    id: 4,
    title: "Game Development",
    slug: "game-development",
    image: require("./assets/images/services/game.webp"),
    description:
      "Engage your audience with captivating games that offer truly immersive and unforgettable experiences.",
    icon: allServiceIcon4,
    detailHeading: "Game Development: Creating Immersive Digital Worlds",
    detailContent: `
      <div class="service-detail-content">
        <h2>Professional Game Development Services</h2>
        <p>The gaming industry has evolved into one of the most lucrative and influential entertainment sectors globally, with billions of players across all demographics. At Quantum Code Solutions, we create captivating games that not only entertain but also engage audiences in meaningful ways. Our comprehensive game development services cover everything from concept creation to post-launch support.</p>
        
        <h3>Our Game Development Services</h3>
        
        <h4>1. Mobile Game Development</h4>
        <p>Reach millions of players with engaging mobile games optimized for smartphones and tablets:</p>
        <ul>
          <li>iOS game development using Swift and SpriteKit</li>
          <li>Android game development using Java/Kotlin and Unity</li>
          <li>Cross-platform mobile games using Unity and Unreal Engine</li>
          <li>Casual and hyper-casual game development</li>
          <li>Puzzle and strategy games</li>
          <li>Action and adventure games</li>
          <li>Multiplayer mobile games with real-time features</li>
          <li>In-app purchase and monetization integration</li>
        </ul>
        
        <h4>2. PC and Console Game Development</h4>
        <p>Create high-quality games for PC and gaming consoles with stunning graphics and immersive gameplay:</p>
        <ul>
          <li>PC game development for Windows, Mac, and Linux</li>
          <li>Console game development for PlayStation, Xbox, and Nintendo Switch</li>
          <li>AAA game development with advanced graphics</li>
          <li>Indie game development for unique gaming experiences</li>
          <li>VR and AR game development</li>
          <li>Racing and simulation games</li>
          <li>RPG and MMORPG development</li>
          <li>First-person and third-person shooters</li>
        </ul>
        
        <h4>3. Web-Based Games</h4>
        <p>Develop browser-based games that reach audiences without requiring downloads:</p>
        <ul>
          <li>HTML5 game development for cross-browser compatibility</li>
          <li>WebGL games with 3D graphics</li>
          <li>Progressive Web App (PWA) games</li>
          <li>Social media games and integrations</li>
          <li>Educational and training games</li>
          <li>Multiplayer browser games</li>
          <li>Casino and gambling games</li>
        </ul>
        
        <h4>4. Game Design and Conceptualization</h4>
        <p>Transform ideas into compelling game concepts with our creative design services:</p>
        <ul>
          <li>Game concept development and documentation</li>
          <li>Storyline and narrative creation</li>
          <li>Character design and development</li>
          <li>Level design and world building</li>
          <li>Game mechanics and rule design</li>
          <li>User interface and user experience design</li>
          <li>Art direction and visual style guides</li>
          <li>Prototyping and proof of concept development</li>
        </ul>
        
        <h4>5. 2D and 3D Art and Animation</h4>
        <p>Bring games to life with stunning visuals and smooth animations:</p>
        <ul>
          <li>2D sprite creation and animation</li>
          <li>3D modeling and texturing</li>
          <li>Character rigging and animation</li>
          <li>Environment and background art</li>
          <li>Visual effects (VFX) and particle systems</li>
          <li>Cinematics and cutscene creation</li>
          <li>UI/UX design for games</li>
          <li>Icon and asset creation</li>
        </ul>
        
        <h4>6. Game Testing and Quality Assurance</h4>
        <p>Ensure your game delivers a flawless experience with comprehensive testing:</p>
        <ul>
          <li>Functional testing across all platforms</li>
          <li>Performance optimization and testing</li>
          <li>Compatibility testing on various devices</li>
          <li>User experience testing and feedback integration</li>
          <li>Multiplayer and network testing</li>
          <li>Security testing for online games</li>
          <li>Localization testing for global markets</li>
          <li>Beta testing coordination and management</li>
        </ul>
        
        <h4>7. Game Monetization and Analytics</h4>
        <p>Maximize revenue and understand player behavior with advanced monetization strategies:</p>
        <ul>
          <li>In-app purchase implementation</li>
          <li>Advertisement integration (banner, interstitial, rewarded)</li>
          <li>Subscription model implementation</li>
          <li>Virtual currency and economy design</li>
          <li>Player analytics and behavior tracking</li>
          <li>A/B testing for game features</li>
          <li>Revenue optimization strategies</li>
          <li>Live operations and content updates</li>
        </ul>
        
        <h3>Technologies and Platforms We Use</h3>
        <p>We leverage industry-leading game engines and technologies including Unity, Unreal Engine, Godot, and custom engines. Our team is proficient in various programming languages including C#, C++, JavaScript, and Python, ensuring we can deliver games on any platform or device.</p>
        
        <h3>Our Game Development Process</h3>
        <p>Our development process follows industry best practices, including pre-production planning, iterative development, regular playtesting, and post-launch support. We maintain close collaboration with clients throughout the development cycle to ensure the final product meets expectations and market demands.</p>
      </div>
    `,
  },
  {
    id: 5,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: require("./assets/images/services/uiuxdesign.webp"),
    description:
      "User experience is at the heart of every successful digital product, determining how users interact with your brand.",
    icon: allServiceIcon5,
    detailHeading: "UI/UX Design: Designing with the User in Mind",
    detailContent: `
      <div class="service-detail-content">
        <h2>Professional UI/UX Design Services</h2>
        <p>User experience is the cornerstone of every successful digital product. In today's competitive digital landscape, having an intuitive and engaging user interface isn't just important—it's essential for business success. At Quantum Code Solutions, we create user-centered designs that not only look beautiful but also drive conversions and enhance user satisfaction.</p>
        
        <h3>Our UI/UX Design Services</h3>
        
        <h4>1. User Experience (UX) Design</h4>
        <p>Create meaningful and relevant experiences for your users through comprehensive UX design:</p>
        <ul>
          <li>User research and persona development</li>
          <li>User journey mapping and flow analysis</li>
          <li>Information architecture and site mapping</li>
          <li>Wireframing and low-fidelity prototyping</li>
          <li>Usability testing and user feedback integration</li>
          <li>Accessibility design and compliance</li>
          <li>Conversion rate optimization</li>
          <li>A/B testing and iterative improvements</li>
        </ul>
        
        <h4>2. User Interface (UI) Design</h4>
        <p>Design visually appealing and functional interfaces that enhance user interaction:</p>
        <ul>
          <li>Visual design and brand integration</li>
          <li>High-fidelity mockups and prototypes</li>
          <li>Design system creation and maintenance</li>
          <li>Icon and illustration design</li>
          <li>Typography and color scheme selection</li>
          <li>Responsive design for all devices</li>
          <li>Interactive element design</li>
          <li>Style guide and design documentation</li>
        </ul>
        
        <h4>3. Mobile App UI/UX Design</h4>
        <p>Optimize user experiences for mobile devices with platform-specific design approaches:</p>
        <ul>
          <li>iOS app design following Human Interface Guidelines</li>
          <li>Android app design using Material Design principles</li>
          <li>Cross-platform design consistency</li>
          <li>Touch-friendly interface design</li>
          <li>Navigation pattern optimization</li>
          <li>Onboarding flow design</li>
          <li>Push notification design</li>
          <li>App store optimization (ASO) design</li>
        </ul>
        
        <h4>4. Web Application Design</h4>
        <p>Create engaging web applications that provide exceptional user experiences:</p>
        <ul>
          <li>Dashboard and admin panel design</li>
          <li>E-commerce platform design</li>
          <li>SaaS application interface design</li>
          <li>Progressive Web App (PWA) design</li>
          <li>Single Page Application (SPA) design</li>
          <li>Form design and optimization</li>
          <li>Data visualization and infographic design</li>
          <li>Landing page design and optimization</li>
        </ul>
        
        <h4>5. Design Research and Strategy</h4>
        <p>Make informed design decisions based on user insights and market research:</p>
        <ul>
          <li>Competitive analysis and benchmarking</li>
          <li>User interviews and surveys</li>
          <li>Market research and trend analysis</li>
          <li>Heuristic evaluation and expert reviews</li>
          <li>Analytics review and insights</li>
          <li>Design strategy development</li>
          <li>Brand alignment and consistency</li>
          <li>ROI measurement and optimization</li>
        </ul>
        
        <h4>6. Prototyping and Testing</h4>
        <p>Validate design concepts through interactive prototypes and user testing:</p>
        <ul>
          <li>Interactive prototype development</li>
          <li>Clickable wireframes and mockups</li>
          <li>User testing session planning and execution</li>
          <li>Usability testing and feedback collection</li>
          <li>Design iteration based on test results</li>
          <li>Stakeholder review and approval processes</li>
          <li>Design validation and optimization</li>
          <li>Pre-launch testing and refinement</li>
        </ul>
        
        <h3>Our Design Process</h3>
        <p>We follow a human-centered design approach that puts users at the center of every decision. Our process includes discovery and research, ideation and conceptualization, design and prototyping, testing and validation, and implementation support. We work closely with clients to ensure designs align with business objectives while meeting user needs.</p>
        
        <h3>Tools and Technologies</h3>
        <p>Our design team uses industry-leading tools including Figma, Sketch, Adobe Creative Suite, InVision, Principle, and various prototyping and testing platforms to deliver high-quality design solutions that meet modern standards and expectations.</p>
      </div>
    `,
  },
  {
    id: 6,
    title: "Blockchain Development",
    slug: "blockchain-development",
    image: require("./assets/images/services/blockchain.webp"),
    description:
      "Blockchain technology offers unparalleled transparency, security, and efficiency for modern business operations.",
    icon: allServiceIcon6,
    detailHeading:
      "Blockchain Development: Securing the Future of Transactions",
    detailContent: `
      <div class="service-detail-content">
        <h2>Professional Blockchain Development Services</h2>
        <p>Blockchain technology is revolutionizing how businesses handle transactions, data storage, and trust verification. At Quantum Code Solutions, we provide comprehensive blockchain development services that help organizations leverage this transformative technology to enhance security, transparency, and efficiency in their operations.</p>
        
        <h3>Our Blockchain Development Services</h3>
        
        <h4>1. Smart Contract Development</h4>
        <p>Create self-executing contracts with automated enforcement and execution:</p>
        <ul>
          <li>Ethereum smart contract development using Solidity</li>
          <li>Binance Smart Chain contract development</li>
          <li>Polygon and other Layer 2 solutions</li>
          <li>Smart contract auditing and security testing</li>
          <li>Gas optimization and cost reduction</li>
          <li>Multi-signature wallet implementation</li>
          <li>Decentralized governance systems</li>
        </ul>
        
        <h4>2. DeFi (Decentralized Finance) Solutions</h4>
        <p>Build innovative financial applications on blockchain platforms:</p>
        <ul>
          <li>Decentralized exchange (DEX) development</li>
          <li>Yield farming and liquidity mining platforms</li>
          <li>Lending and borrowing protocols</li>
          <li>Staking and reward distribution systems</li>
          <li>Automated market makers (AMM)</li>
          <li>Cross-chain bridge development</li>
          <li>DeFi portfolio management tools</li>
        </ul>
        
        <h4>3. NFT (Non-Fungible Token) Development</h4>
        <p>Create unique digital assets and NFT marketplaces:</p>
        <ul>
          <li>NFT minting and marketplace development</li>
          <li>ERC-721 and ERC-1155 token standards</li>
          <li>NFT gaming and collectibles platforms</li>
          <li>Royalty and revenue sharing systems</li>
          <li>Metadata management and IPFS integration</li>
          <li>NFT auction and bidding systems</li>
          <li>Cross-chain NFT solutions</li>
        </ul>
        
        <h4>4. Cryptocurrency and Token Development</h4>
        <p>Launch custom cryptocurrencies and tokens for various use cases:</p>
        <ul>
          <li>ERC-20 token development and deployment</li>
          <li>Custom blockchain network creation</li>
          <li>Tokenomics design and implementation</li>
          <li>Initial Coin Offering (ICO) development</li>
          <li>Security Token Offering (STO) solutions</li>
          <li>Utility token creation and distribution</li>
          <li>Token wallet integration</li>
        </ul>
        
        <h4>5. Enterprise Blockchain Solutions</h4>
        <p>Implement blockchain technology for enterprise-level applications:</p>
        <ul>
          <li>Supply chain transparency and tracking</li>
          <li>Identity verification and management</li>
          <li>Document authentication and notarization</li>
          <li>Voting and governance systems</li>
          <li>Healthcare data management</li>
          <li>Real estate transaction platforms</li>
          <li>Intellectual property protection</li>
        </ul>
        
        <h4>6. Blockchain Integration Services</h4>
        <p>Integrate blockchain technology with existing systems and applications:</p>
        <ul>
          <li>API development for blockchain interaction</li>
          <li>Legacy system integration</li>
          <li>Payment gateway integration</li>
          <li>Database synchronization</li>
          <li>Third-party service integration</li>
          <li>Cross-platform compatibility</li>
          <li>Real-time data synchronization</li>
        </ul>
        
        <h3>Blockchain Platforms We Work With</h3>
        <p>Our team has expertise across multiple blockchain platforms including Ethereum, Binance Smart Chain, Polygon, Solana, Cardano, Hyperledger Fabric, and many others. We help clients choose the most suitable platform based on their specific requirements and use cases.</p>
        
        <h3>Security and Compliance</h3>
        <p>Security is paramount in blockchain development. We follow industry best practices for smart contract security, conduct thorough audits, and ensure compliance with relevant regulations and standards to protect your blockchain applications and users.</p>
      </div>
    `,
  },
  {
    id: 12,
    title: "AI Development",
    slug: "ai-development",
    link: "/ai-development",
    image: require("./assets/images/services/ai.webp"),
    description:
      "Harness the power of artificial intelligence to transform your business with custom AI solutions tailored to your specific needs.",
    icon: allServiceIcon2,
    detailHeading: "AI Development: Building Intelligent Solutions",
    detailContent: `
      <div class="service-detail-content">
        <h2>Custom AI Development Services for Business Innovation</h2>
        <p>Artificial Intelligence is revolutionizing how businesses operate, make decisions, and engage with customers. At Quantum Code Solutions, we develop custom AI solutions that help organizations automate processes, gain valuable insights, and create innovative products and services that drive competitive advantage.</p>
        
        <h3>Our AI Development Services</h3>
        
        <h4>1. Machine Learning Solutions</h4>
        <p>Develop intelligent systems that learn from data and improve over time:</p>
        <ul>
          <li>Supervised learning models for classification and prediction</li>
          <li>Unsupervised learning for pattern recognition and clustering</li>
          <li>Reinforcement learning for decision-making systems</li>
          <li>Deep learning with neural networks</li>
          <li>Transfer learning for efficient model development</li>
          <li>Anomaly detection systems</li>
          <li>Recommendation engines and personalization systems</li>
        </ul>
        
        <h4>2. Natural Language Processing</h4>
        <p>Build systems that understand, interpret, and generate human language:</p>
        <ul>
          <li>Text classification and sentiment analysis</li>
          <li>Named entity recognition and information extraction</li>
          <li>Language translation and localization</li>
          <li>Chatbot and conversational AI development</li>
          <li>Text summarization and content generation</li>
          <li>Speech recognition and voice assistants</li>
          <li>Document analysis and processing</li>
        </ul>
        
        <h4>3. Computer Vision Solutions</h4>
        <p>Develop systems that can interpret and understand visual information:</p>
        <ul>
          <li>Image classification and object detection</li>
          <li>Facial recognition and emotion analysis</li>
          <li>Video analytics and surveillance systems</li>
          <li>Optical character recognition (OCR)</li>
          <li>Augmented reality applications</li>
          <li>Medical image analysis</li>
          <li>Visual quality control for manufacturing</li>
        </ul>
        
        <h4>4. Predictive Analytics</h4>
        <p>Leverage data to forecast trends and make proactive business decisions:</p>
        <ul>
          <li>Demand forecasting and inventory optimization</li>
          <li>Customer churn prediction and prevention</li>
          <li>Predictive maintenance for equipment and systems</li>
          <li>Risk assessment and fraud detection</li>
          <li>Sales forecasting and market analysis</li>
          <li>Resource allocation optimization</li>
          <li>Financial modeling and prediction</li>
        </ul>
        
        <h4>5. AI Integration Services</h4>
        <p>Seamlessly integrate AI capabilities into existing systems and workflows:</p>
        <ul>
          <li>API development for AI model deployment</li>
          <li>Integration with enterprise systems (CRM, ERP, etc.)</li>
          <li>Cloud-based AI solutions (AWS, Azure, Google Cloud)</li>
          <li>Edge AI implementation for IoT devices</li>
          <li>AI-powered automation of business processes</li>
          <li>Data pipeline development for AI systems</li>
          <li>Performance optimization and scaling</li>
        </ul>
        
        <h3>Our AI Development Process</h3>
        <p>We follow a comprehensive approach to AI development that includes problem definition, data collection and preparation, model selection and development, training and validation, deployment, monitoring, and continuous improvement. Our iterative process ensures that AI solutions deliver measurable business value and adapt to changing requirements.</p>
        
        <h3>Industries We Serve</h3>
        <p>Our AI development expertise spans across multiple industries including healthcare, finance, retail, manufacturing, logistics, education, and entertainment. We understand the unique challenges and opportunities in each sector and develop tailored AI solutions that address specific business needs.</p>
      </div>
    `,
  },
  {
    id: 7,
    title: "Cloud Computing Services",
    slug: "cloud-computing",
    image: require("./assets/images/services/cloudcomputing.webp"),
    description:
      "Embrace the cloud with our comprehensive cloud computing services that transform how your business operates.",
    icon: allServiceIcon7,
    detailHeading:
      "Cloud Computing Services: Scalable Solutions for Modern Businesses",
    detailContent: `
      <div class="service-detail-content">
        <h2>Comprehensive Cloud Computing Services</h2>
        <p>Cloud computing has transformed how businesses operate, offering unprecedented scalability, flexibility, and cost-effectiveness. At Quantum Code Solutions, we provide end-to-end cloud services that help organizations leverage the power of cloud technology to drive innovation, improve efficiency, and accelerate growth.</p>
        
        <h3>Our Cloud Computing Services</h3>
        
        <h4>1. Cloud Infrastructure Services</h4>
        <p>Build robust and scalable cloud infrastructure tailored to your business needs:</p>
        <ul>
          <li>AWS, Azure, and Google Cloud Platform setup</li>
          <li>Virtual machine configuration and management</li>
          <li>Auto-scaling and load balancing implementation</li>
          <li>Network architecture and security configuration</li>
          <li>Storage solutions and data management</li>
          <li>Backup and disaster recovery planning</li>
          <li>Cost optimization and resource monitoring</li>
        </ul>
        
        <h4>2. Cloud Application Development</h4>
        <p>Develop cloud-native applications that leverage cloud capabilities:</p>
        <ul>
          <li>Microservices architecture development</li>
          <li>Serverless application development</li>
          <li>Container orchestration with Kubernetes</li>
          <li>API gateway and service mesh implementation</li>
          <li>Event-driven architecture design</li>
          <li>Cloud database integration</li>
          <li>Real-time data processing solutions</li>
        </ul>
        
        <h4>3. DevOps and CI/CD Implementation</h4>
        <p>Streamline development and deployment processes with modern DevOps practices:</p>
        <ul>
          <li>Continuous integration and deployment pipelines</li>
          <li>Infrastructure as Code (IaC) implementation</li>
          <li>Automated testing and quality assurance</li>
          <li>Configuration management and version control</li>
          <li>Monitoring and logging solutions</li>
          <li>Performance optimization and alerting</li>
          <li>Security scanning and compliance automation</li>
        </ul>
        
        <h4>4. Cloud Security Services</h4>
        <p>Protect your cloud infrastructure and applications with comprehensive security measures:</p>
        <ul>
          <li>Identity and access management (IAM)</li>
          <li>Network security and firewall configuration</li>
          <li>Data encryption and key management</li>
          <li>Security monitoring and threat detection</li>
          <li>Compliance and governance frameworks</li>
          <li>Vulnerability assessment and penetration testing</li>
          <li>Incident response and recovery planning</li>
        </ul>
        
        <h4>5. Cloud Data Services</h4>
        <p>Manage and analyze your data effectively with cloud-based data solutions:</p>
        <ul>
          <li>Data warehouse and data lake implementation</li>
          <li>Big data processing and analytics</li>
          <li>Machine learning and AI model deployment</li>
          <li>Real-time data streaming and processing</li>
          <li>Data integration and ETL processes</li>
          <li>Business intelligence and reporting</li>
          <li>Data governance and quality management</li>
        </ul>
        
        <h4>6. Multi-Cloud and Hybrid Cloud Solutions</h4>
        <p>Optimize your cloud strategy with multi-cloud and hybrid approaches:</p>
        <ul>
          <li>Multi-cloud architecture design and implementation</li>
          <li>Hybrid cloud integration and management</li>
          <li>Cloud vendor selection and optimization</li>
          <li>Workload distribution and balancing</li>
          <li>Cross-cloud data synchronization</li>
          <li>Unified monitoring and management</li>
          <li>Cost optimization across multiple providers</li>
        </ul>
        
        <h3>Cloud Platforms We Support</h3>
        <p>Our team has extensive experience with major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and other specialized cloud providers. We help you choose the right platform based on your specific requirements and business objectives.</p>
        
        <h3>Benefits of Our Cloud Services</h3>
        <p>Our cloud solutions provide numerous benefits including reduced infrastructure costs, improved scalability, enhanced security, better disaster recovery, increased collaboration, and faster time-to-market for new applications and services.</p>
      </div>
    `,
  },

  {
    id: 8,
    title: "Cloud Migration Services",
    slug: "cloud-migration",
    image: require("./assets/images/services/cloudmigration.webp"),
    description:
      "Migrating to the cloud can be complex, but our expert cloud migration services simplify the entire process for your organization.",
    icon: allServiceIcon8,
    detailHeading:
      "Cloud Migration Services: Seamlessly Transitioning to the Cloud",
    detailContent: `
      <div class="service-detail-content">
        <h2>Expert Cloud Migration Services</h2>
        <p>Cloud migration is a critical step in digital transformation that can significantly impact your business operations. At Quantum Code Solutions, we provide comprehensive cloud migration services that ensure a smooth, secure, and efficient transition to the cloud while minimizing downtime and maximizing benefits.</p>
        
        <h3>Our Cloud Migration Services</h3>
        
        <h4>1. Migration Assessment and Planning</h4>
        <p>Develop a comprehensive migration strategy tailored to your specific needs:</p>
        <ul>
          <li>Current infrastructure assessment and analysis</li>
          <li>Application portfolio evaluation</li>
          <li>Cloud readiness assessment</li>
          <li>Migration roadmap and timeline development</li>
          <li>Cost-benefit analysis and ROI projections</li>
          <li>Risk assessment and mitigation strategies</li>
          <li>Compliance and regulatory considerations</li>
        </ul>
        
        <h4>2. Application Migration</h4>
        <p>Migrate applications to the cloud with minimal disruption:</p>
        <ul>
          <li>Lift-and-shift migration for quick transitions</li>
          <li>Re-platforming for cloud optimization</li>
          <li>Re-architecting for cloud-native benefits</li>
          <li>Legacy application modernization</li>
          <li>Database migration and optimization</li>
          <li>API integration and connectivity</li>
          <li>Performance testing and optimization</li>
        </ul>
        
        <h4>3. Data Migration Services</h4>
        <p>Securely transfer your data to cloud platforms:</p>
        <ul>
          <li>Data assessment and classification</li>
          <li>Data cleansing and preparation</li>
          <li>Secure data transfer protocols</li>
          <li>Data validation and integrity checks</li>
          <li>Backup and recovery implementation</li>
          <li>Data synchronization and replication</li>
          <li>Compliance and governance setup</li>
        </ul>
        
        <h4>4. Infrastructure Migration</h4>
        <p>Transition your IT infrastructure to cloud environments:</p>
        <ul>
          <li>Server and virtual machine migration</li>
          <li>Network configuration and setup</li>
          <li>Storage migration and optimization</li>
          <li>Security configuration and hardening</li>
          <li>Monitoring and alerting setup</li>
          <li>Disaster recovery implementation</li>
          <li>Performance optimization</li>
        </ul>
        
        <h4>5. Hybrid Cloud Migration</h4>
        <p>Create seamless hybrid cloud environments:</p>
        <ul>
          <li>Hybrid architecture design and implementation</li>
          <li>On-premises and cloud integration</li>
          <li>Workload distribution strategies</li>
          <li>Data synchronization between environments</li>
          <li>Unified management and monitoring</li>
          <li>Security across hybrid environments</li>
          <li>Cost optimization strategies</li>
        </ul>
        
        <h4>6. Post-Migration Optimization</h4>
        <p>Optimize your cloud environment after migration:</p>
        <ul>
          <li>Performance monitoring and tuning</li>
          <li>Cost optimization and resource rightsizing</li>
          <li>Security assessment and enhancement</li>
          <li>Automation implementation</li>
          <li>Staff training and knowledge transfer</li>
          <li>Ongoing support and maintenance</li>
          <li>Continuous improvement recommendations</li>
        </ul>
        
        <h3>Migration Methodologies</h3>
        <p>We follow proven migration methodologies including the 6 R's strategy (Rehost, Replatform, Repurchase, Refactor, Retire, Retain) to determine the best approach for each application and workload, ensuring optimal outcomes for your specific requirements.</p>
        
        <h3>Why Choose Our Migration Services</h3>
        <p>Our experienced team has successfully completed hundreds of cloud migrations across various industries. We provide end-to-end support, from initial assessment to post-migration optimization, ensuring your cloud journey is successful and delivers the expected business benefits.</p>
      </div>
    `,
  },
  {
    id: 9,
    title: "Blockchain Cloud Migration",
    slug: "blockchain-cloud-migration",
    image: require("./assets/images/services/blockchain-cloud-migration.webp"),
    description:
      "Combine the revolutionary benefits of blockchain technology with the power of cloud computing through our specialized migration services.",
    icon: allServiceIcon9,
    detailHeading:
      "Blockchain Cloud Migration: Integrating Decentralization with Scalability",
    detailContent: `
      <div class="service-detail-content">
        <h2>Blockchain Cloud Migration Services</h2>
        <p>The convergence of blockchain technology and cloud computing represents the next frontier in digital innovation. At Quantum Code Solutions, we specialize in migrating blockchain applications and infrastructure to cloud environments, combining the security and transparency of blockchain with the scalability and flexibility of cloud computing.</p>
        
        <h3>Our Blockchain Cloud Migration Services</h3>
        
        <h4>1. Blockchain Infrastructure Migration</h4>
        <p>Migrate your blockchain nodes and infrastructure to cloud platforms:</p>
        <ul>
          <li>Blockchain node deployment and configuration</li>
          <li>Validator and mining infrastructure setup</li>
          <li>Network configuration and optimization</li>
          <li>Load balancing and auto-scaling implementation</li>
          <li>High availability and disaster recovery</li>
          <li>Performance monitoring and optimization</li>
          <li>Cost optimization strategies</li>
        </ul>
        
        <h4>2. DApp (Decentralized Application) Migration</h4>
        <p>Move your decentralized applications to cloud environments:</p>
        <ul>
          <li>Smart contract deployment and management</li>
          <li>Frontend application hosting and CDN setup</li>
          <li>Backend service integration</li>
          <li>Database migration and synchronization</li>
          <li>API gateway and service mesh implementation</li>
          <li>User authentication and authorization</li>
          <li>Real-time data synchronization</li>
        </ul>
        
        <h4>3. Hybrid Blockchain-Cloud Architecture</h4>
        <p>Design and implement hybrid architectures that leverage both technologies:</p>
        <ul>
          <li>On-chain and off-chain data management</li>
          <li>Layer 2 solution implementation</li>
          <li>Sidechain and bridge development</li>
          <li>Cross-chain interoperability</li>
          <li>State channel implementation</li>
          <li>Oracle integration for external data</li>
          <li>Consensus mechanism optimization</li>
        </ul>
        
        <h4>4. Blockchain Data Analytics in Cloud</h4>
        <p>Leverage cloud analytics capabilities for blockchain data:</p>
        <ul>
          <li>Blockchain data indexing and querying</li>
          <li>Real-time transaction monitoring</li>
          <li>Analytics dashboard development</li>
          <li>Machine learning model deployment</li>
          <li>Fraud detection and security monitoring</li>
          <li>Compliance reporting and auditing</li>
          <li>Business intelligence integration</li>
        </ul>
        
        <h4>5. Security and Compliance</h4>
        <p>Ensure security and compliance in blockchain cloud environments:</p>
        <ul>
          <li>Private key management and HSM integration</li>
          <li>Multi-signature wallet implementation</li>
          <li>Access control and identity management</li>
          <li>Encryption and data protection</li>
          <li>Regulatory compliance frameworks</li>
          <li>Audit trail and logging</li>
          <li>Incident response and recovery</li>
        </ul>
        
        <h4>6. Performance Optimization</h4>
        <p>Optimize blockchain applications for cloud environments:</p>
        <ul>
          <li>Transaction throughput optimization</li>
          <li>Latency reduction strategies</li>
          <li>Resource allocation and scaling</li>
          <li>Caching and data optimization</li>
          <li>Network optimization and CDN integration</li>
          <li>Cost optimization and resource management</li>
          <li>Performance monitoring and alerting</li>
        </ul>
        
        <h3>Benefits of Blockchain Cloud Migration</h3>
        <p>Migrating blockchain applications to the cloud provides numerous advantages including improved scalability, reduced infrastructure costs, enhanced security, better disaster recovery, global accessibility, and the ability to leverage advanced cloud services like AI/ML, analytics, and IoT integration.</p>
        
        <h3>Our Expertise</h3>
        <p>Our team combines deep expertise in both blockchain technology and cloud computing, ensuring successful migration projects that deliver the benefits of both technologies while maintaining security, performance, and compliance requirements.</p>
      </div>
    `,
  },
  {
    id: 10,
    title: "Robotic Process Automation (RPA)",
    slug: "rpa",
    image: require("./assets/images/services/rpa.webp"),
    description:
      "Streamline your business processes and boost productivity with our advanced RPA services that eliminate manual work.",
    icon: allServiceIcon10,
    detailHeading:
      "Robotic Process Automation (RPA): Automating Repetitive Tasks",
    detailContent: `
      <div class="service-detail-content">
        <h2>Robotic Process Automation (RPA) Services</h2>
        <p>Robotic Process Automation is transforming how businesses operate by automating repetitive, rule-based tasks that traditionally required human intervention. At Quantum Code Solutions, we implement intelligent RPA solutions that increase efficiency, reduce errors, and free up your workforce to focus on higher-value activities that drive business growth.</p>
        
        <h3>Our RPA Services</h3>
        
        <h4>1. RPA Assessment and Strategy</h4>
        <p>Identify automation opportunities and develop comprehensive RPA strategies:</p>
        <ul>
          <li>Process assessment and automation potential analysis</li>
          <li>ROI calculation and business case development</li>
          <li>Automation roadmap and prioritization</li>
          <li>Technology stack selection and architecture design</li>
          <li>Change management and adoption strategies</li>
          <li>Governance framework establishment</li>
          <li>Success metrics and KPI definition</li>
        </ul>
        
        <h4>2. Process Automation Development</h4>
        <p>Design and develop custom automation solutions for your specific processes:</p>
        <ul>
          <li>Bot development using UiPath, Automation Anywhere, and Blue Prism</li>
          <li>Workflow design and optimization</li>
          <li>Exception handling and error management</li>
          <li>Data extraction and processing automation</li>
          <li>System integration and API connectivity</li>
          <li>User interface automation</li>
          <li>Document processing and OCR integration</li>
        </ul>
        
        <h4>3. Intelligent Automation</h4>
        <p>Combine RPA with AI and machine learning for advanced automation:</p>
        <ul>
          <li>Cognitive automation with AI capabilities</li>
          <li>Natural language processing integration</li>
          <li>Machine learning model integration</li>
          <li>Computer vision for document processing</li>
          <li>Predictive analytics and decision automation</li>
          <li>Chatbot integration for customer service</li>
          <li>Sentiment analysis and text mining</li>
        </ul>
        
        <h4>4. Industry-Specific Automation</h4>
        <p>Implement automation solutions tailored to specific industry needs:</p>
        <ul>
          <li>Financial services: Account reconciliation, compliance reporting</li>
          <li>Healthcare: Claims processing, patient data management</li>
          <li>Manufacturing: Inventory management, quality control</li>
          <li>Retail: Order processing, customer service automation</li>
          <li>HR: Employee onboarding, payroll processing</li>
          <li>IT: System monitoring, incident management</li>
          <li>Legal: Contract analysis, document review</li>
        </ul>
        
        <h4>5. RPA Implementation and Deployment</h4>
        <p>Ensure successful deployment and adoption of RPA solutions:</p>
        <ul>
          <li>Infrastructure setup and configuration</li>
          <li>Bot deployment and testing</li>
          <li>User training and change management</li>
          <li>Performance monitoring and optimization</li>
          <li>Security implementation and compliance</li>
          <li>Scalability planning and execution</li>
          <li>Documentation and knowledge transfer</li>
        </ul>
        
        <h4>6. RPA Maintenance and Support</h4>
        <p>Provide ongoing support to ensure optimal RPA performance:</p>
        <ul>
          <li>Bot monitoring and maintenance</li>
          <li>Performance optimization and tuning</li>
          <li>Error resolution and troubleshooting</li>
          <li>Process updates and modifications</li>
          <li>Capacity planning and scaling</li>
          <li>Security updates and compliance monitoring</li>
          <li>24/7 technical support</li>
        </ul>
        
        <h4>7. RPA Analytics and Reporting</h4>
        <p>Measure and optimize RPA performance with comprehensive analytics:</p>
        <ul>
          <li>Performance dashboard development</li>
          <li>ROI tracking and reporting</li>
          <li>Process efficiency metrics</li>
          <li>Error analysis and improvement recommendations</li>
          <li>Capacity utilization monitoring</li>
          <li>Compliance reporting and auditing</li>
          <li>Continuous improvement insights</li>
        </ul>
        
        <h3>RPA Technologies We Use</h3>
        <p>Our team is certified in leading RPA platforms including UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, and open-source solutions. We help you choose the right platform based on your specific requirements, budget, and technical environment.</p>
        
        <h3>Benefits of RPA Implementation</h3>
        <p>RPA implementation delivers significant benefits including cost reduction, improved accuracy, faster processing times, enhanced compliance, better customer experience, and increased employee satisfaction by eliminating mundane tasks and enabling focus on strategic work.</p>
      </div>
    `,
  },
  {
    id: 11,
    title: "AI Calling Agency",
    slug: "ai-calling-agency",
    link: "/ai-calling-agency",
    image: require("./assets/images/services/ai-calling-agency.webp"),
    description:
      "Transform your customer outreach with our AI-powered calling solutions that deliver personalized interactions at scale.",
    icon: allServiceIcon2,
    detailHeading: "AI Calling Agency: Revolutionizing Customer Communication",
    detailContent: `
      <div class="service-detail-content">
        <h2>AI-Powered Calling Solutions for Modern Businesses</h2>
        <p>In today's fast-paced business environment, effective customer communication is essential for growth and retention. Our AI Calling Agency leverages cutting-edge artificial intelligence to transform how businesses connect with customers, prospects, and partners through voice interactions.</p>
        
        <h3>Our AI Calling Services</h3>
        
        <h4>1. Intelligent Virtual Calling Assistants</h4>
        <p>Deploy AI-powered virtual agents that handle outbound calls with natural-sounding voices and human-like conversation abilities:</p>
        <ul>
          <li>Natural language processing for dynamic conversations</li>
          <li>Voice cloning and customization options</li>
          <li>Sentiment analysis for adaptive responses</li>
          <li>Multi-language support for global operations</li>
          <li>Real-time script adaptation based on customer responses</li>
          <li>Seamless handoff to human agents when needed</li>
          <li>Call recording and quality monitoring</li>
        </ul>
        
        <h4>2. Automated Appointment Scheduling</h4>
        <p>Streamline your scheduling process with AI-powered calling solutions:</p>
        <ul>
          <li>Automated appointment booking and confirmation calls</li>
          <li>Rescheduling and cancellation management</li>
          <li>Calendar integration with popular scheduling platforms</li>
          <li>Reminder calls and follow-ups</li>
          <li>Custom scheduling rules and availability management</li>
          <li>Multi-location and multi-provider support</li>
          <li>Customer preference tracking</li>
        </ul>
        
        <h4>3. Lead Qualification and Nurturing</h4>
        <p>Qualify and nurture leads at scale with intelligent calling solutions:</p>
        <ul>
          <li>Automated lead qualification based on predefined criteria</li>
          <li>Personalized follow-up calls based on customer behavior</li>
          <li>CRM integration for seamless data flow</li>
          <li>Lead scoring and prioritization</li>
          <li>Customized call scripts for different customer segments</li>
          <li>A/B testing of different approaches</li>
          <li>Performance analytics and optimization</li>
        </ul>
        
        <h4>4. Customer Feedback and Surveys</h4>
        <p>Gather valuable customer insights through AI-powered calling campaigns:</p>
        <ul>
          <li>Automated survey calls with natural conversation flow</li>
          <li>Real-time response recording and analysis</li>
          <li>Sentiment detection and emotional intelligence</li>
          <li>Customizable survey templates and questions</li>
          <li>Integration with feedback management systems</li>
          <li>Trend analysis and reporting</li>
          <li>Closed-loop feedback implementation</li>
        </ul>
        
        <h4>5. Sales and Telemarketing Automation</h4>
        <p>Enhance your sales operations with intelligent calling solutions:</p>
        <ul>
          <li>AI-powered sales calls with natural conversation abilities</li>
          <li>Product recommendation based on customer profile</li>
          <li>Objection handling and persuasive communication</li>
          <li>Cross-selling and upselling capabilities</li>
          <li>Integration with e-commerce and payment systems</li>
          <li>Performance tracking and sales analytics</li>
          <li>Compliance management for telemarketing regulations</li>
        </ul>
        
        <h3>Why Choose Our AI Calling Agency</h3>
        <p>Our AI calling solutions offer numerous advantages over traditional call centers, including cost efficiency, scalability, consistency, 24/7 availability, multilingual capabilities, and detailed analytics. We help businesses transform their customer communication while maintaining the personal touch that builds lasting relationships.</p>
        
        <h3>Implementation Process</h3>
        <p>We follow a structured approach to implementing AI calling solutions, starting with needs assessment and strategy development, followed by script creation, voice selection, integration with existing systems, testing and optimization, deployment, and ongoing support and improvement.</p>
      </div>
    `,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
