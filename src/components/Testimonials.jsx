/**
 * Testimonials Component
 *
 * Displays a list of testimonial quotes
 * Data is imported from src/data/testimonials.js
 */

import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="w-full py-10 lg:py-24 bg-[#161616]">
      <div className="px-5 lg:px-20 max-w-[1440px] mx-auto">
        {/* Section heading with red underline */}
        <h3 className="text-2xl lg:text-6xl font-normal mb-8 lg:mb-16 lowercase relative inline-block">
          testimonials
          <span className="absolute bottom-0 left-0 w-full h-0.5 lg:h-1 bg-[#F04847]"></span>
        </h3>

        {/* Testimonials list */}
        <div className="space-y-8 lg:space-y-16 mt-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="text-sm lg:text-lg leading-relaxed text-white/90 max-w-3xl">
              "{testimonial.quote}"
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
