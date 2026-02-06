/**
 * Project Card Component
 *
 * Displays an individual project card with number, title, description, and image
 * The entire card is clickable and opens the project in a new tab
 * Responsive: adapts to grid layout
 */

const ProjectCard = ({ project, number }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Project number */}
      <div className="text-2xl lg:text-5xl font-normal mb-4 lg:mb-6 text-white/60">
        {String(number).padStart(2, '0')}
      </div>

      {/* Project title */}
      <h4 className="text-xl lg:text-3xl font-normal mb-3 lg:mb-4 group-hover:text-[#F04847] transition-colors leading-tight">
        {project.title}
      </h4>

      {/* Project description */}
      <p className="text-sm lg:text-lg text-white/80 leading-relaxed mb-6 lg:mb-8">
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
