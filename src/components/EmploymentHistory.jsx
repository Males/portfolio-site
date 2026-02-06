/**
 * Employment History Component
 *
 * Displays a list of employment positions with company links and dates
 * Data is imported from src/data/employment.js
 */

import { employmentHistory } from '../data/employment';

const EmploymentHistory = () => {
  return (
    <section className="w-full py-10 bg-[#161616]">
      <div className="px-5">
        {/* Section heading with red underline */}
        <h3 className="text-2xl font-normal mb-6 lowercase relative inline-block">
          history
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F04847]"></span>
        </h3>

        {/* Employment list */}
        <ul className="space-y-3 mt-6">
          {employmentHistory.map((job, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Checkmark indicator */}
              <span className="text-white text-sm mt-0.5" aria-hidden="true">
                ✓
              </span>

              {/* Job details */}
              <div className={job.isItalic ? 'italic text-white/60 text-sm' : 'text-sm'}>
                {job.title && (
                  <span className="font-normal">
                    {job.title}
                  </span>
                )}
                {job.company && (
                  <>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F04847]"
                      >
                        {', '}
                        {job.company}
                      </a>
                    ) : (
                      <span>{', '}{job.company}</span>
                    )}
                  </>
                )}
                {job.years && (
                  <span className="text-white/60">
                    {', '}
                    {job.years}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmploymentHistory;
