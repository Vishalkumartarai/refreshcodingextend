import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100 overflow-y-auto max-h-screen">
      <h1 className="text-2xl font-extrabold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to Refresh Coding! We are committed to protecting your privacy
        and ensuring that your personal information is handled in a safe and
        responsible manner. This Privacy Policy outlines the types of personal
        information we collect, how we use it, and the steps we take to ensure
        your information is protected.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-2">
        We collect various types of information in connection with the services
        we provide, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal identification information (name, email address, etc.)</li>
        <li>Course preferences and progress</li>
        <li>Blog post interactions (comments, likes, shares)</li>
        <li>YouTube video interactions (views, likes, comments)</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-2">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our service</li>
        <li>To notify you about changes to our service</li>
        <li>
          To allow you to participate in interactive features of our service
        </li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          service
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
