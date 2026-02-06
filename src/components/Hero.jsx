/**
 * Hero Component
 *
 * Displays the hero section with logo, name, and description
 */

const Hero = () => {
  return (
    <section className="w-full py-10 bg-[#323433]">
      <div className="px-5">
        {/* Logo */}
        <div className="mb-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8L8 0L16 8L8 16L0 8Z" fill="#F04847"/>
            <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#F04847" opacity="0.7"/>
            <path d="M0 24L8 16L16 24L8 32L0 24Z" fill="#F04847" opacity="0.5"/>
          </svg>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl font-normal mb-4 lowercase">
          adam males
        </h1>
        <p className="text-base leading-relaxed text-white/80 max-w-xs">
          Product designer leader with 10+ years experience building user-centered solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
