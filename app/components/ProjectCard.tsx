export type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectTech: string;
  projectLink: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className="bg-slate-100 max-w-md h-auto mx-4 my-4 rounded-lg shadow-xl overflow-hidden ring-1 ring-slate-900/5 hover:ring-2 hover:ring-violet-300 "
    >
      <div
        className="p-5 2xl:p-8 space-y-2"
      >
        <div className="underline font-medium text-xl leading-6 text-indigo-600" >
          <a href={props.projectLink}>{props.projectName}</a>
        </div>
        {/* TODO: clean up
            this is absolutely not the correct way to do things, it would honestly be best to have it's own component or data type. 
            right now its *okay* since things are static, but not ideal.  */}
        <p dangerouslySetInnerHTML={{__html: props.projectDescription}}>
        </p>
        <div
          className="flex-col"
        >
          <span className="text-indigo-700 font-bold">Technologies:</span> {props.projectTech}
        </div>
      </div>
    </div>
  );
}