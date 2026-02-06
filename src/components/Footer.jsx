/**
 * Footer Component
 *
 * Simple footer with copyright and contact information
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 lg:py-8 bg-[#323433] border-t border-white/10">
      <div className="px-5 lg:px-20 max-w-[1440px] mx-auto">
        <p className="text-sm lg:text-base text-white/60">
          © {currentYear} Adam Males. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
