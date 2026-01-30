/**
 * Footer Component
 *
 * Simple footer with copyright and contact information
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-gray-200">
      <div className="max-w-7xl px-10">
        <p className="text-sm text-gray-600">
          © {currentYear} Adam Males. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
