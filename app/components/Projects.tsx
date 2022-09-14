import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <section className="w-full p-3 my-3 ">
      <div
        className="flex flex-row items-start justify-center"
      >
        <div
          className="text-4xl font-bold text-slate-500 "
        >
          Some of My Projects...
        </div>
      </div>
      
      <div
        className="flex flex-row flex-wrap p-3 my-3 justify-center items-start"
      >
        <div className="flex-initial">

          <ProjectCard
              projectName="Reducing Dataset Size for CNNs Using PCA"
              projectDescription="<ul class='list-disc list-inside'>
                <li>We wanted to see if applying PCA to the CIFAR10 dataset as an input to a Convolutional Neural Network would produce satisfactory results while keeping the dataset size low.</li>
                <li>Utilizing Python and Keras we created two neural network architectures that trained on different compression percentages of the CIFAR10 dataset, with no compression being the control.</li> 
                <li>We found that compressing 81.25% (Using 6 of 32 principal components) of the data resulted in on par or just below image classification of using the full dataset.</li>
                </ul>"
              projectTech="Python, Keras, Deep Learning, Neural Networks"
              projectLink={"https://github.com/ashsobeck/cpsc8420finalproject"}
          />
        </div>
        
        <div
          className="flex flex-col"
        >
          <ProjectCard
            projectName="sobeck.dev"
            projectDescription="<ul class='list-disc list-inside'>
             <li>This website! I wanted to learn the Remix framework, and what better way than to make my portfolio with it!</li>
             <li>I hope to also utilize the easy and seamless database interactions with a coffee profile app in the future.</li>
            </ul>"
            projectTech="Remix, TypeScript, Web Development"
            projectLink={"https://github.com/ashsobeck/sobeck-dev-remix"}
          />
          <ProjectCard
            projectName="Melbourne Pedestrian Density"
            projectDescription="<ul class='list-disc list-inside'~>
              <li>Using publicly available data on the pedestrian densities in the streets of Melbourne, Australia, we made visualization of the data.</li>
              <li> Utilizing d3.js on top of deck.gl, an intuitive and beautiful visualization was created. More information is available on the website!</li>
            </ul>"
            projectTech="JavaScript, d3, deck.gl"
            projectLink={"https://ashsobeck.github.io/melbourne-pedestrian-visualization/"}
          />
        </div>
        
      </div>
    </section>
  )
}