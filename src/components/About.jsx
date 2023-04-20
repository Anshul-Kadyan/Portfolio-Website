import AboutPhoto from "../assets/AppFiles/AboutPhoto.svg";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      id="about"
      className="md:px-48 px-4   md:py-24 py-10 h-full w-full font-poppins">
      <div className="flex md:flex-row flex-col-reverse md:justify-between gap-4">
        {/* Left / Bottom Side */}
        <div className="">
          <img
            src={AboutPhoto}
            alt="AboutPhoto"
            className="w-[100%]  h-[100%] "
          />
        </div>
        {/* Right / Top Side */}
        <div className="flex flex-col justify-center  ">
          <div className="md:text-4xl  text-xl  md:mx-0 mx-auto ">
            <p>About Me...</p>
          </div>
          <div className="flex flex-col gap-2 md:max-w-[500px] max-w-[300px]  md:py-8 py-4  items-start md:mx-0 mx-auto">
            <p>
              Hello, I'm Anshul Kadyan, a Software Engineer with 3 Years of
              experience.
            </p>
            <p>
              My mission is to help others learn the skills they need to succeed
              as software engineers.
            </p>
            <p>
              My values are deep rooted in honesty, transparency, and
              collaboration.
            </p>
            <p>
              Check Out Courses On My{" "}
              <a
                href="https://www.youtube.com/channel/UCi-_eFXcJC92ujHwFkup_TA"
                target="_blank"
                className=" underline underline-offset-2 font-semibold">
                Youtube
              </a>
              .
            </p>
          </div>
          <div className=" text-lg  md:mx-0 mx-auto">
            <button className=" px-3 py-2 rounded-full ease-in-out delay-150 bg-slate-200 md:hover:-translate-y-1 md:hover:scale-110 hover:bg-slate-300 duration-300 ">
              <Link
                to="contact"
                smooth={true}
                offset={25}
                duration={500}
                className=" md:font-semibold font-normal text-sm">
                Let's Talk
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
