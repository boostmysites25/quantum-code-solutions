import { Link } from "react-router-dom";
import { logoImg, routes } from "../constant";
import SEO from "../components/SEO";
import { seoData } from "../seoData";
import LandingFooter from "../components/landingPages/LandingFooter";

const ThankYou = () => {
  const links = routes.filter((option) => option.path !== "/blogs/:id");
  return (
    <>
      <SEO {...seoData.thankYou} />
      <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-secondary/5">
        <div className="py-4 sticky top-0 w-full backdrop-blur-md z-50 text-primary_text">
          <div className="wrapper flex justify-between items-center gap-10">
            <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
              <Link smooth={true} to="/" className="cursor-pointer">
                <img
                  loading="lazy"
                  src={logoImg}
                  width={150}
                  height={150}
                  className="w-[3rem] md:w-[4rem] scale-125 object-contain"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper flex flex-col items-center justify-center h-full">
          <h1 className="heading-1">Thank You</h1>
          <p className="text-center text-gray-800 desc text-balance">
            Thanks for contacting us, one of our associates will get in touch
            with you soon!
          </p>
          <Link
            to={"/"}
            className="mt-7 text-sm cursor-pointer primary-btn w-fit"
          >
            Home
          </Link>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default ThankYou;
