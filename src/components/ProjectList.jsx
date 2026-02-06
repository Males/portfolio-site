/**
 * Project List Component
 *
 * Displays a vertical list of project cards
 * Data is imported from src/data/projects.js
 */

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section id="projects" className="w-full py-10 bg-[#323433]">
      <div className="px-5">
        {/* Section heading with red underline */}
        <h3 className="text-2xl font-normal mb-8 lowercase relative inline-block">
          projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F04847]"></span>
        </h3>

        {/* Projects list - single column, stacked vertically */}
        <div className="mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
