/**
 * Employment History Component
 *
 * Displays a list of employment positions with company links and dates
 * Data is imported from src/data/employment.js
 */

import { employmentHistory } from '../data/employment';

const EmploymentHistory = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-7xl px-10">
        {/* Section heading */}
        <h3 className="text-2xl md:text-3xl font-light mb-4">
          History
        </h3>

        {/* Employment list */}
        <ul className="space-y-4">
          {employmentHistory.map((job, index) => (
            <li key={index} className="flex items-center gap-3">
              {/* Arrow indicator */}
              <span className="text-gray-400" aria-hidden="true">
                →
              </span>

              {/* Job details */}
              <div className={job.isItalic ? 'italic text-gray-600' : ''}>
                {job.title && (
                  <span className="font-medium">
                    {job.title}
                  </span>
                )}
                {job.company && (
                  <>
                    {' at '}
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link-blue hover:underline"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </>
                )}
                {job.years && (
                  <span className="text-gray-600">
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
