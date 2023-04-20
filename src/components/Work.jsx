import { WorkData } from "../constant/index";
import WorkPhoto from "../assets/AppFiles/WorkPhoto.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function Work() {
  return (
    <section
      id="work"
      className="md:px-48 px-4   md:py-24 py-10 h-full w-full font-poppins">
      <div className="flex flex-col m-auto p-auto justify-between ">
        <h1 className="flex py-5 px-auto md:text-4xl  text-xl ">Work...</h1>
        <div className="flex overflow-x-scroll py-auto hide-scroll-bar">
          <div className="flex flex-nowrap snap-x snap-mandatory">
            {WorkData.map((work) => {
              return (
                <div
                  key={work.key}
                  className="inline-block px-3 py-7 snap-center">
                  <div className="md:w-80 w-72 h-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                    <img
                      src={work.photo}
                      alt="HeroPhoto"
                      className="w-52 h-52 mx-auto "
                    />

                    <div className="p-5 ">
                      <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 ">
                        {work.title}
                      </h5>

                      <p className="mb-3 md:text-base text-sm font-normal  text-gray-700">
                        {work.discription}
                      </p>

                      <a
                        href={work.link}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 gap-2  text-sm font-medium text-center cursor-pointer text-white bg-black rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 duration-300">
                        <p>Try Out</p>
                        <ArrowOutwardIcon className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="md:max-w-[500px] max-w-[300px]  md:text-left text-center md:mx-0  mx-auto">
            My work section is a glimpse into my professional journey,
            showcasing my expertise across different fields and highlighting my
            accomplishments. From my previous roles and companies to the
            projects I've worked on, this section offers a concise overview of
            my experience and skills. Explore it to learn more about what I can
            bring to your team!
          </p>
          <div className="flex items-center">
            <img src={WorkPhoto} alt="HeroPhoto" className="w-96  h-auto " />
          </div>
        </div>
      </div>
    </section>
  );
}
