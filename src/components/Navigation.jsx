/**
 * Navigation Component
 *
 * Displays the site header with the designer's name/title on the left
 * and a Projects link on the right
 */

const Navigation = () => {
  return (
    <nav className="w-full py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        {/* Left side - Name and title */}
        <div>
          <h1 className="text-xl font-bold lowercase mb-1">
            adam males
          </h1>
          <p className="text-sm text-gray-600">
            Product designer, Founder
          </p>
        </div>

        {/* Right side - Projects link */}
        <a
          href="#projects"
          className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          Projects
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
