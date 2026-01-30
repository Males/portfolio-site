/**
 * Project List Component
 *
 * Displays a grid of project cards
 * Data is imported from src/data/projects.js
 */

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section id="projects" className="w-full py-6">
      <div className="px-10">
        {/* Section heading */}
        <h3 className="text-2xl md:text-3xl font-light mb-4">
          Projects
        </h3>

        {/* Projects grid - 2 columns on mobile, 3 on desktop, scales for larger displays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
