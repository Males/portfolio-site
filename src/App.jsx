/**
 * Main App Component
 *
 * This is the root component that brings together all sections of the portfolio
 */

import Hero from './components/Hero';
import EmploymentHistory from './components/EmploymentHistory';
import ProjectList from './components/ProjectList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#323433]">
      <main>
        <Hero />
        <EmploymentHistory />
        <ProjectList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
