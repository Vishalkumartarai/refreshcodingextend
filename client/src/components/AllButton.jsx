import React from "react";
import ScrollToTopButton from "../components/ScrollToTop";
import ThemeToggleButton from "../components/ThemeToggle";
import ContactButton from "../components/ContactButton";

const AllButton = () => {
  return (
    <div className="App">
      {/* Other components and routes */}

      {/* Flex container for buttons */}
      <div className="fixed bottom-12 right-6 flex space-x-4 z-50">
        <div className="p-2">
          <ScrollToTopButton />
        </div>
        <div className="p-2 ">
          <ThemeToggleButton />
        </div>
        <div className="p-2 ">
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default AllButton;
