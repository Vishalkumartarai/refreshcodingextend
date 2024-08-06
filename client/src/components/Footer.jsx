import React, { useState } from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import PrivacyPolicy from "../components/PrivacyPolicy"; // Adjust the import path as needed

export default function FooterCom() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    setShowPrivacyPolicy(true);
  };

  const closeModal = () => {
    setShowPrivacyPolicy(false);
  };

  return (
    <>
      <Footer
        container
        className="border border-t-8 bg-gradient-to-r from-indigo-500 to-custom-emerald text-black"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-base sm:text-lg font-semibold text-black"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-custom-emerald to-indigo-500 rounded-lg text-white">
                  Refresh
                </span>
                Coding
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 text-black">
              <div>
                <Footer.Title title="Email Us" className="text-black" />
                <a
                  href="mailto:mrefreshcoding@gmail.com"
                  className="text-black text-sm"
                >
                  mrefreshcoding@gmail.com
                </a>
              </div>

              <div>
                <Footer.Title title="Follow us" className="text-black" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.github.com/madhulika3016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-black" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    onClick={handlePrivacyPolicyClick}
                    className="text-black"
                  >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="About" className="text-black" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/about"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    Refresh Coding
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact us" className="text-black" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/contact"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    Contact us
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-black">
            <Footer.Copyright
              href="#"
              by="Refresh Coding"
              year={new Date().getFullYear()}
              className="text-black dark:text-white"
            />
            <div className="flex gap-6 sm:mt-4 sm:justify-center text-black">
              <Footer.Icon
                href="https://www.facebook.com/RefreshCodingM/"
                target="_blank"
                icon={BsFacebook}
                className="text-black"
              />
              <Footer.Icon
                href="https://www.instagram.com/refreshcoding/"
                target="_blank"
                icon={BsInstagram}
                className="text-black"
              />
              <Footer.Icon
                href="https://www.github.com/madhulika3016"
                target="_blank"
                icon={BsGithub}
                className="text-black"
              />
              <Footer.Icon
                href="https://www.linkedin.com/in/madhulika-dubey3/"
                target="_blank"
                icon={BsLinkedin}
                className="text-black"
              />
            </div>
          </div>
        </div>
      </Footer>

      {showPrivacyPolicy && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-slate-200 dark:bg-slate-800 text-black dark:text-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
            <PrivacyPolicy />
            <button
              className="absolute top-2 right-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
