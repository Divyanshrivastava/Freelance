import { socialImgs } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left - Terms */}
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="text-sm text-white-50 hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Center - Social Icons */}
        <div className="flex justify-center gap-4 md:gap-5">
          {socialImgs.map(({ imgPath, link }, index) => (
            <a
              key={index}
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 md:size-11 flex items-center justify-center bg-black-100 border border-black-50 rounded-xl transition-all duration-300 hover:bg-black-50"
            >
              <img
                src={imgPath}
                alt={`social-${index}`}
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Right - Copyright */}
        <div className="flex justify-center md:justify-end">
          <p className="text-sm text-center text-white-50">
            © {currentYear} Dira's. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
