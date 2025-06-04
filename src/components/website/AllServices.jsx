import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const AllServices = ({ length }) => {
  return (
    <section className="bg-secondary/5 ">
      <div className="wrapper py-[5rem] flex flex-col gap-5 items-start sm:items-center">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          We offer a wide range of creative services
        </h2>
        <div
          data-aos="fade-up"
          className="mt-5 flex flex-wrap justify-center gap-6"
        >
          {allServices.slice(0, length || allServices.length).map((service) => (
            <div
              key={service.id}
              className="relative bg-secondary/15 hover:bg-primary/5 group hover:text-background transition-all duration-300 rounded-lg p-5 flex text-center flex-col justify-between w-full md:w-[calc((100%/2)-1rem)] lg:w-[calc((100%/3)-1rem)] overflow-hidden"
            >
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover brightness-[.4] z-[-1]"
              />
              <div className="flex text-white flex-col items-center">
                <div className="w-[6rem] h-[6rem] flex justify-center items-center relative">
                  <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-secondary rounded-full"></div>
                  <service.icon className="z-[2] w-[4rem] h-[4rem] fill-white" />
                </div>
                <h6 className="text-xl font-medium mt-3">{service.title}</h6>
                <p className="desc mt-2">{service.description}</p>
              </div>
              <div
                className={`grid ${
                  service.link
                    ? "grid-cols-2 gap-3"
                    : "grid-cols-1 w-1/2 mx-auto"
                }`}
              >
                {service.link && (
                  <Link
                    to={service.link}
                    className="group-hover:bg-secondary text-white font-medium cursor-pointer tracking-wide bg-primary text-sm hover:shadow-primary/25 hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-full mx-auto border border-secondary"
                  >
                    Know More
                  </Link>
                )}

                <Link
                  to={`/services/${service.slug}`}
                  className="text-white font-medium cursor-pointer tracking-wide bg-secondary text-sm hover:shadow-primary/25 hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-full mx-auto"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <div data-aos="fade-up" className="flex justify-center my-7">
            <Link to="/services">
              <button className="primary-btn flex items-center gap-1">
                View All <IoIosArrowRoundForward className="!text-2xl" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServices;
