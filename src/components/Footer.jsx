import { resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="contactUs" className="mt-20 border-t py-10 border-neutral-700">
      {/* Contact Us Section */}
      <div className="grid justify-center mb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h3 className="text-md font-semibold mb-4 text-center text-neutral-100">
            Contact Us
          </h3>
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 justify-center">
            {resourcesLinks.map((link, index) => (
              <li key={index} className="mb-2 sm:mb-0">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* "All rights reserved" section */}
      <div className="text-center text-neutral-500 mt-8 text-sm sm:text-base">
        © {new Date().getFullYear()} FutureTrader. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
