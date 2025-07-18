// import React from 'react'

import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <>
    <div className="border-t border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
    </div>
    <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img src={project.image} height={150} width={150} className="mb-6 rounded" alt={project.title} />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                        ))}
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Projects;
