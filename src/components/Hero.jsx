import HeroPhoto from "../assets/AppFiles/HeroPhoto.svg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="md:px-48 px-4   md:py-24 py-10 h-full w-full font-poppins">
      <div className="flex md:flex-row flex-col md:justify-between gap-4">
        {/* Right / Top Side */}
        <div className="flex flex-col justify-center  ">
          <div className="flex flex-col md:gap-8 gap-2 md:text-4xl  text-xl  md:mx-0 mx-auto">
            <p>HI, I'M ANSHUL KADYAN</p>
            <p>I'M A SOTWARE ENGINEER</p>
          </div>
          <div className=" md:max-w-[500px] max-w-[300px] md:py-8 py-4 md:mx-0 mx-auto">
            <p className=" md:text-left text-center">
              Hello! I'm Anshul Kadyan, a professional Website Developer and AI
              Enthusiast based in Australia. I'm currently studying at the
              University of Sydney, where I'm expanding my skills in Web
              Development and AI technologies.
            </p>
          </div>
          <div className="flex md:gap-7 gap-3 text-lg md:mx-0 mx-auto">
            <button className=" px-3 py-2 rounded-full ease-in-out delay-150 bg-slate-200 md:hover:-translate-y-1 md:hover:scale-110 hover:bg-slate-300 duration-300 ">
              <Link
                to="contact"
                smooth={true}
                offset={25}
                duration={500}
                className=" md:font-semibold font-normal text-sm">
                Hire Me
              </Link>
            </button>
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
        {/* Left / Button Side */}
        <div className="flex items-center md:mx-0 mx-auto">
          <img src={HeroPhoto} alt="HeroPhoto" className="w-96  h-auto " />
        </div>
      </div>
    </section>
  );
}
