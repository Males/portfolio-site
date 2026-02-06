/**
 * Hero Component
 *
 * Displays the hero section with logo, name, and description
 * Responsive: stacked on mobile, side-by-side on desktop
 */

const Hero = () => {
  return (
    <section className="w-full py-10 lg:py-24 bg-[#323433]">
      <div className="px-5 lg:px-20 max-w-[1440px] mx-auto">
        {/* Flex container: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-24">
          {/* Logo */}
          <div className="mb-8 lg:mb-0 flex-shrink-0">
            <img
              src="/assets/Logo black.svg"
              alt="Adam Males Logo"
              className="w-[100px] lg:w-[280px] h-auto"
            />
          </div>

          {/* Name and Title */}
          <div className="lg:pt-2">
            <h1 className="text-4xl lg:text-7xl font-normal mb-4 lg:mb-6 lowercase leading-tight">
              adam males
            </h1>
            <p className="text-base lg:text-xl leading-relaxed text-white/80 max-w-md">
              Product designer leader with 10+ years of crafting user-centered solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
