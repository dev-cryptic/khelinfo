import React from "react";

const Terms = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Terms and Conditions</h1>
        <p className="text-gray-600 mt-2">
          Last updated: July 14, 2025
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p>
          By accessing and using <strong>KHELiNFO</strong>, you agree to abide by the terms and conditions outlined here. 
          If you do not agree with any part of these terms, you must not use the platform.
        </p>
      </section>

      {/* Use of Website */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Use of the Website</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must be at least 13 years of age to use KHELiNFO.</li>
          <li>You agree not to use the website for unlawful or harmful purposes.</li>
          <li>Content may not be copied or redistributed without written permission.</li>
        </ul>
      </section>

      {/* User Content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. User Content</h2>
        <p>
          If you post or upload content (e.g., comments, messages, media), you grant us the right to display and use that content 
          for promotional or functional purposes. You are responsible for ensuring your content does not infringe on third-party rights.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content, branding, code, and data on KHELiNFO are the property of KHELiNFO or its licensors. 
          Unauthorized reproduction or distribution is strictly prohibited.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Disclaimer of Liability</h2>
        <p>
          We strive to keep information accurate and updated, but we make no warranties about the completeness, accuracy, or availability 
          of any content or features. Use the platform at your own risk.
        </p>
      </section>

      {/* Third-party Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-party Links</h2>
        <p>
          KHELiNFO may include links to third-party websites. We are not responsible for their content or privacy practices. 
          Visiting those sites is at your own discretion.
        </p>
      </section>

      {/* Account Termination */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate user accounts that violate our terms or misuse our platform. 
          This may occur without prior notice.
        </p>
      </section>

      {/* Modifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
        <p>
          These Terms may be updated from time to time. Continued use of the site means you accept the updated terms.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about these terms, reach out at{" "}
          <a href="mailto:support@khelinfo.in" className="text-blue-600 underline">support@khelinfo.in</a>.
        </p>
      </section>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KHELiNFO. All rights reserved.
      </div>
    </div>
  );
};

export default Terms;
