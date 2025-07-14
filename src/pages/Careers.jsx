import React from "react";

const Careers = () => {
  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-700 whitespace-nowrap overflow-x-auto">
          Careers at KHELiNFO
        </h1>
      </div>
      <div className="text-center mb-12 mt-0">
        <p className="text-lg md:text-xl text-gray-600">
          Be a part of India’s growing sports tech revolution.
        </p>
      </div>

      {/* Culture Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
        <p className="mb-2">
          At KHELiNFO, we believe in building a collaborative, inclusive, and impact-driven environment.
          Whether you're passionate about sports, code, or content — there's a place for you here.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Flexible work hours and remote options</li>
          <li>Sports-friendly culture — cricket breaks are real!</li>
          <li>Open communication and fast growth environment</li>
          <li>Startup spirit with real responsibility</li>
        </ul>
      </section>

      {/* Open Roles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Role Card */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-1">Full Stack Developer (MERN)</h3>
            <p className="text-sm text-gray-600 mb-2">Location: Remote / Bhopal</p>
            <p className="text-blue-600 font-semibold mb-2">₹5,00,000 – ₹7,00,000 per annum</p>
            <p className="text-sm text-gray-700">Build scalable features for our sports platform used by thousands every day.</p>
          </div>

          {/* Role Card */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-1">UI/UX Designer</h3>
            <p className="text-sm text-gray-600 mb-2">Location: Remote</p>
            <p className="text-blue-600 font-semibold mb-2">₹3,00,000 – ₹5,00,000 per annum</p>
            <p className="text-sm text-gray-700">Craft sleek, sports-friendly interfaces with fan-first experience in mind.</p>
          </div>

          {/* Role Card */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-1">Content Writer (Sports)</h3>
            <p className="text-sm text-gray-600 mb-2">Location: Remote</p>
            <p className="text-blue-600 font-semibold mb-2">₹15,000 – ₹25,000/month</p>
            <p className="text-sm text-gray-700">Write match reports, sports blogs, and trending stories for our audience.</p>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
        <p>
          Are you a student or fresher looking to enter the sports-tech space?
          Join our 3-month remote internship program.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Certificates + Letter of Recommendation</li>
          <li>Stipend: ₹3,000 – ₹7,000/month</li>
          <li>Flexible hours and live projects</li>
        </ul>
      </section>

      {/* How to Apply */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p>
          Send your resume, portfolio, or GitHub profile to{" "}
          <a href="mailto:careers@khelinfo.in" className="text-blue-600 underline">careers@khelinfo.in</a>.  
          Mention the position you're applying for in the subject line.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Shape the Future of Indian Sports with Us</h2>
        <p className="mb-4">Whether you're a developer, designer, analyst, or storyteller — if you love sports and innovation, we're waiting for you!</p>
        <a
          href="mailto:careers@khelinfo.in"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          🚀 Apply Now
        </a>
      </section>
    </div>
  );
};

export default Careers;
