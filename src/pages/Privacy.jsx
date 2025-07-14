import React from 'react';

const Privacy = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Privacy Policy</h1>
        <p className="text-gray-600 mt-2">
          Last updated: July 14, 2025
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p>
          At <strong>KHELiNFO</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use,
          and safeguard your personal information when you use our website, mobile apps, and services.
        </p>
      </section>

      {/* Information Collection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Info:</strong> Name, email, phone number (if submitted by you)</li>
          <li><strong>Usage Data:</strong> Pages visited, time on site, clicks, device/browser info</li>
          <li><strong>Cookies:</strong> To enhance user experience and track performance</li>
        </ul>
      </section>

      {/* Usage of Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and improve our services and features</li>
          <li>To personalize content and user experience</li>
          <li>To communicate updates, promotions, and support</li>
          <li>To analyze site traffic and performance</li>
        </ul>
      </section>

      {/* Sharing Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>
          We do <strong>not sell or trade</strong> your personal information. We may share anonymized data with third-party tools (e.g., analytics platforms).
        </p>
      </section>

      {/* Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement industry-standard security practices (e.g., HTTPS, access control, encryption) to protect your information. However, no method is 100% secure.
        </p>
      </section>

      {/* Third-party Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>
          Our website may use services like Google Analytics, Firebase, or AWS. These third parties have their own privacy policies which you should review.
        </p>
      </section>

      {/* User Control */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Request access or deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Disable cookies from your browser settings</li>
        </ul>
      </section>

      {/* Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted here with an updated revision date.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          For any questions or concerns, please contact us at{' '}
          <a href="mailto:privacy@khelinfo.in" className="text-blue-600 underline">privacy@khelinfo.in</a>.
        </p>
      </section>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KHELiNFO. All rights reserved.
      </div>
    </div>
  );
};

export default Privacy;
