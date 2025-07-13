import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";

function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [currentTimes, setCurrentTimes] = useState("");
  const [showCricketDropdown, setShowCricketDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      setCurrentTime(now.toLocaleString('en-IN', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      };
      setCurrentTimes(now.toLocaleString('en-IN', options));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Language and Time Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between py-1 px-1 text-xs text-gray-700 gap-2">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="border px-2 py-1 rounded text-gray-800 text-xs"
          >
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
            <option value="Tamil">தமிழ்</option>
            <option value="Telugu">తెలుగు</option>
          </select>
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap text-xs">
            <span>{currentTime}</span>
            <span className="text-gray-800">Updated {currentTimes} IST</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 my-2">
        {/* Top header bar for all screens */}
        <div className="container mx-auto px-5 py-3 flex items-center justify-between md:justify-start">

          {/* Hamburger on mobile */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-5 text-gray-700" />
            </button>
          </div>

          {/* Logo in center on mobile, left on desktop */}
          <div className="flex-1 text-center md:text-left md:flex md:items-center md:space-x-6">
            <Link to="/home" className="inline-flex items-center justify-center ">
              <img src="/KHELiNFOlogo.png" alt="KHELiNFO Logo" className="h-6 object-contain my-5 mx-auto md:mx-0" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 ml-6">
              <Link to="/home" className="hover:text-[#012666]">Home</Link>
              <div
                className="relative group"
                onMouseEnter={() => setShowCricketDropdown(true)}
                onMouseLeave={() => setShowCricketDropdown(false)}
              >
                <button className="hover:text-[#012666] inline-flex items-center gap-1">
                  Cricket
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCricketDropdown ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {showCricketDropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <div className="py-1">
                      <Link to="/cricket/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News</Link>
                      <Link to="/cricket/fixtures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fixtures</Link>
                      <Link to="/cricket/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Results</Link>
                      <Link to="/cricket/series" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Series</Link>
                      <Link to="/cricket/teams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Teams</Link>
                      <Link to="/cricket/rankings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ICC Rankings</Link>
                      <Link to="/cricket/records" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Records</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/football" className="hover:text-[#012666]">Football</Link>
              <Link to="/kabaddi" className="hover:text-[#012666]">Kabaddi</Link>
            </div>
          </div>

          {/* Login always on right */}
          <div className="md:ml-auto">
            <button className="inline-flex items-center text-[10px] md:text-sm font-medium bg-gray-100 border border-gray-300 py-[5px] px-[6px] md:py-1 md:px-3 rounded hover:bg-[#012666] hover:text-white transition">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-3 h-3 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black opacity-30"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <div className="absolute top-[0px] rounded-xm h-full left-0 w-[180px]  bg-white border-r border-gray-200 p-4 shadow-lg z-50">
              {/* Close button */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 text-sm font-semibold"
                  aria-label="Close Menu"
                >
                  &times;
                </button>
              </div>

              <Link to="/home" className="block py-2 text-xs text-gray-700 hover:text-[#012666]">Home</Link>

              <details className="group">
                <summary className="flex items-center justify-between py-2 text-xs cursor-pointer text-gray-700 hover:text-[#012666]">
                  <span>Cricket</span>
                  <ChevronDown className="w-3 h-3 group-open:rotate-180 transition duration-200" />
                </summary>
                <div className="pl-3 space-y-1">
                  <Link to="/cricket/news" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">News</Link>
                  <Link to="/cricket/fixtures" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">Fixtures</Link>
                  <Link to="/cricket/results" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">Results</Link>
                  <Link to="/cricket/series" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">Series</Link>
                  <Link to="/cricket/teams" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">Teams</Link>
                  <Link to="/cricket/rankings" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">ICC Rankings</Link>
                  <Link to="/cricket/records" className="block py-1 text-xs text-gray-700 hover:text-[#012666]">Records</Link>
                </div>
              </details>

              <Link to="/football" className="block py-2 text-xs text-gray-700 hover:text-[#012666]">Football</Link>
              <Link to="/kabaddi" className="block py-2 text-xs text-gray-700 hover:text-[#012666]">Kabaddi</Link>
            </div>
          </div>
        )}




      </header>

    </>
  );
}

export default Header;
