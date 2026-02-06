/**
 * Project List Component
 *
 * Displays project cards in a responsive grid
 * Mobile: single column, Desktop: 3 columns
 * Data is imported from src/data/projects.js
 */

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section id="projects" className="w-full py-10 lg:py-20 bg-[#323433]">
      <div className="px-5 lg:px-20 max-w-[1440px] mx-auto">
        {/* Section heading with red underline */}
        <h3 className="text-2xl lg:text-5xl font-normal mb-8 lg:mb-12 lowercase relative inline-block">
          projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F04847]"></span>
        </h3>

        {/* Projects grid - 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
