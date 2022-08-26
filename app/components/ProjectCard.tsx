export type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectTech: string;
  projectLink: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className="rounded-xl bg-slate"
    >
      <div
        className="md:flex-row"
      >
        <div className="text-lg text-semibold">
          {props.projectName}
        </div>
        <p>
          {props.projectDescription}
        </p>
        <div
          className="flex-col"
        >
          {props.projectTech}
        </div>
        <a href={props.projectLink}>{props.projectLink}</a>
      </div>
    </div>
  );
}