import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <section className=" w-full p-3 my-3 bg-slate-700">
      <div
        className="text-lg"
      >
        Some of My Projects...
      </div>
      <div
        className="flex flex-row flex-wrap p-3 my-3"
      >
        <ProjectCard
          projectName="Melbourne Pedestrian Density"
          projectDescription="hello"
          projectTech="javascript, d3"
          projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
        />
        <ProjectCard
          projectName="Melbourne Pedestrian Density"
          projectDescription="hello"
          projectTech="javascript, d3"
          projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
        />
        <ProjectCard
          projectName="Melbourne Pedestrian Density"
          projectDescription="hello"
          projectTech="javascript, d3"
          projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
        />
        <ProjectCard
          projectName="Melbourne Pedestrian Density"
          projectDescription="hello"
          projectTech="javascript, d3"
          projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
        />
        <ProjectCard
          projectName="Melbourne Pedestrian Density"
          projectDescription="hello"
          projectTech="javascript, d3"
          projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
        />
      </div>
      
    </section>
  )
}