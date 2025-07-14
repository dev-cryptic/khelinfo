import React from "react";

const Advertise = () => {
  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Advertise with KHELiNFO</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Reach passionate sports fans across India with custom ad placements and branding solutions.
        </p>
      </div>

      {/* Why Advertise Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose KHELiNFO?</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>Over 1,00,000+ monthly visitors</li>
          <li>Targeted sports audience (cricket, football, kabaddi, and more)</li>
          <li>Real-time match engagement and interactive content</li>
          <li>High CTR with content-integrated ad formats</li>
        </ul>
      </section>

      {/* Ad Options & Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ad Options & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🏷️ Banner Ads</h3>
            <p className="text-sm text-gray-600 mb-2">Header, sidebar, or footer banners on all pages.</p>
            <p className="font-bold text-blue-600 text-lg">Starts from ₹5,000/week</p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">📢 Sponsored Content</h3>
            <p className="text-sm text-gray-600 mb-2">Articles, blog mentions, or product placements.</p>
            <p className="font-bold text-blue-600 text-lg">₹8,000 per article</p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">📺 Video Ads</h3>
            <p className="text-sm text-gray-600 mb-2">Short videos during match streams or home page.</p>
            <p className="font-bold text-blue-600 text-lg">₹15,000/week</p>
          </div>
        </div>
      </section>

      {/* Audience Insights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Audience</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>70% male, 30% female</li>
          <li>Age group: 18-35 years</li>
          <li>Geography: Tier 1 & Tier 2 Indian cities</li>
          <li>Avg. session time: 5+ minutes</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to Promote Your Brand?</h2>
        <p className="mb-4">Reach out now for a custom media kit, campaign strategy, or to book your ad slot.</p>
        <a
          href="mailto:ads@khelinfo.in"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          📩 Contact Us at ads@khelinfo.in
        </a>
      </section>
    </div>
  );
};

export default Advertise;
