export type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectTech: string;
  projectLink: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className="bg-slate-100 max-w-md mx-auto rounded-lg shadow-xl overflow-hidden sm:max-w-2xl ring-1 ring-slate-900/5 hover:ring-2 hover:ring-violet-300"
    >
      <div
        className="md:flex-row p-6 2xl:p-8 space-y-2"
      >
        <div className="font-medium text-sm leading-6 text-indigo-600">
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
        <a className="underline text-indigo-700 " href={props.projectLink}>{props.projectLink}</a>
      </div>
    </div>
  );
}