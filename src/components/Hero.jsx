/**
 * Hero Component
 *
 * Displays a small introductory section with the designer's name and role
 */

const Hero = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-7xl px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-0">
          Adam Males
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          Product designer leader
        </p>
      </div>
    </section>
  );
};

export default Hero;
