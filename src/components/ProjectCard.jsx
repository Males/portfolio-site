/**
 * Project Card Component
 *
 * Displays an individual project card with an image, title, and description
 * The entire card is clickable and opens the project in a new tab
 */

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Project image - Golden ratio (φ ≈ 1.618:1) */}
      <div className="aspect-[1618/1000] overflow-hidden mb-4 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project title */}
      <h4 className="text-lg font-medium mb-2 group-hover:text-link-blue transition-colors">
        {project.title}
      </h4>

      {/* Project description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {project.description}
      </p>
    </a>
  );
};

export default ProjectCard;
