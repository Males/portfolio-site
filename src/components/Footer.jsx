/**
 * Footer Component
 *
 * Simple footer with copyright and contact information
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-[#323433] border-t border-white/10">
      <div className="px-5">
        <p className="text-sm text-white/60">
          © {currentYear} Adam Males. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
