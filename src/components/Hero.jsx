/**
 * Hero Component
 *
 * Displays the hero section with logo, name, and description
 * Responsive: stacked on mobile, side-by-side on desktop
 */

const Hero = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-[#323433]">
      <div className="px-5 lg:px-20 max-w-[1440px] mx-auto">
        {/* Flex container: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-32">
          {/* Logo */}
          <div className="mb-8 lg:mb-0 flex-shrink-0">
            <img
              src="/assets/Logo black.svg"
              alt="Adam Males Logo"
              className="w-[120px] lg:w-[180px] h-auto"
            />
          </div>

          {/* Name and Title */}
          <div className="lg:pt-4">
            <h1 className="text-4xl lg:text-6xl font-normal mb-4 lowercase">
              adam males
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-white/80 max-w-xs">
              Product designer leader with 10+ years of crafting user-centered solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
