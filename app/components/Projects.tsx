import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <section>
      <ProjectCard
        projectName="Melbourne Pedestrian Density"
        projectDescription="hello"
        projectTech="javascript, d3"
        projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
      />
    </section>
  )
}