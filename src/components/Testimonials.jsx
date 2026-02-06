/**
 * Testimonials Component
 *
 * Displays a list of testimonial quotes
 * Data is imported from src/data/testimonials.js
 */

import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="w-full py-10 bg-[#161616]">
      <div className="px-5">
        {/* Section heading with red underline */}
        <h3 className="text-2xl font-normal mb-8 lowercase relative inline-block">
          testimonials
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F04847]"></span>
        </h3>

        {/* Testimonials list */}
        <div className="space-y-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="text-sm leading-relaxed text-white/90">
              "{testimonial.quote}"
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
