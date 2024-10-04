import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="p-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className="m-8 flex flex-wrap lg: justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role}-{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 text-slate-300 font-medium text-sm px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default Experience;
