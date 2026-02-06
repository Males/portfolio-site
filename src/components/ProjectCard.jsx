/**
 * Project Card Component
 *
 * Displays an individual project card with number, title, description, and image
 * The entire card is clickable and opens the project in a new tab
 */

const ProjectCard = ({ project, number }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block mb-12"
    >
      {/* Project number */}
      <div className="text-2xl font-normal mb-4 text-white/60">
        {String(number).padStart(2, '0')}
      </div>

      {/* Project title */}
      <h4 className="text-xl font-normal mb-3 group-hover:text-[#F04847] transition-colors">
        {project.title}
      </h4>

      {/* Project description */}
      <p className="text-sm text-white/80 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Project image - Square aspect ratio */}
      <div className="aspect-square overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </a>
  );
};

export default ProjectCard;
