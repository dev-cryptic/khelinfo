import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://localhost:4000/api/news', {
          params: {
            q: 'sports',
            from: '2025-06-12',
            sortBy: 'publishedAt',
            pageSize: 13,
            language: 'en',
            apiKey: '07f4da41dd6f4e8aaac40ee0d4fb9656',
          },
        });
        const blogData = response.data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          link: article.url,
        }));
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching sports blogs', error);
      }
    };

    fetchBlogs();
  }, []);

  const horizontalScrollContainer = "flex gap-4 overflow-x-auto pb-4 px-1 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";
  const badgeClass = "ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap";
  const cardBase = "min-w-[270px] sm:min-w-[300px] bg-white shadow-md rounded-xl border border-gray-200 p-4 transition-all duration-200 transform hover:scale-[1.005] hover:shadow-sm";
  const getCardSizeClass = () => {
    const sizeVariants = [
      'h-[220px]',
      'h-[260px]',
      'h-[300px]',
      'h-[340px]',
      'h-[260px]',
      'h-[220px]'
    ];
    return sizeVariants[Math.floor(Math.random() * sizeVariants.length)];
  };

  return (
    <>
      {/* Cricket Section */}
      <section className="text-gray-600 body-font mb-5">
        <div className="container px-3 sm:px-5 py-5 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Cricket</h1>
            <a href="#" className="text-indigo-500 hover:underline text-xs sm:text-sm font-medium">More</a>
          </div>
          <div className={horizontalScrollContainer}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${cardBase} bg-gradient-to-r from-yellow-50 to-red-50`}>
                <div className="text-[10px] sm:text-xs flex justify-between text-gray-500 mb-4 items-center">
                  <span className="truncate w-[70%]">33rd Match • Indian Premier League 2025</span>
                  <span className={`${badgeClass} bg-yellow-100 text-yellow-800`}>T20</span>
                </div>
                <div className="space-y-2 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/1200px-Sunrisers_Hyderabad_Logo.svg.png" alt="SRH Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">SRH</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">162-5 <span className="text-[10px] text-gray-600">(20)</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" alt="MI Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">MI</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">59-1 <span className="text-[10px] text-gray-600">(7)</span></span>
                  </div>
                </div>
                <p className="text-red-600 text-xs sm:text-sm mt-2 font-medium truncate">Mumbai Indians need 104 runs in 78 balls</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Football Section */}
      <section className="text-gray-600 body-font mb-5">
        <div className="container px-3 sm:px-5 py-5 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Football</h1>
            <a href="#" className="text-indigo-500 hover:underline text-xs sm:text-sm font-medium">More</a>
          </div>
          <div className={horizontalScrollContainer}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${cardBase} bg-gradient-to-r from-blue-50 to-green-50`}>
                <div className="text-[10px] sm:text-xs flex justify-between text-gray-500 mb-4 items-center">
                  <span className="truncate w-[70%]">Final • UEFA Champions League 2025</span>
                  <span className={`${badgeClass} bg-blue-100 text-blue-800`}>Football</span>
                </div>
                <div className="space-y-2 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Patna_Pirates_logo.png" alt="Barcelona Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">Barcelona</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png" alt="Chelsea Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">Chelsea</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">1</span>
                  </div>
                </div>
                <p className="text-green-600 text-xs sm:text-sm mt-2 font-medium truncate">Barcelona won the UEFA Champions League</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kabaddi Section */}
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-3 sm:px-5 py-5 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Kabaddi</h1>
            <a href="#" className="text-indigo-500 hover:underline text-xs sm:text-sm font-medium">More</a>
          </div>
          <div className={horizontalScrollContainer}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${cardBase} bg-gradient-to-r from-purple-50 to-pink-50`}>
                <div className="text-[10px] sm:text-xs flex justify-between text-gray-500 mb-4 items-center">
                  <span className="truncate w-[70%]">Match {12 + i} • Pro Kabaddi League 2025</span>
                  <span className={`${badgeClass} bg-purple-100 text-purple-800`}>Kabaddi</span>
                </div>
                <div className="space-y-2 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Patna_Pirates_logo.png" alt="Team A" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">Patna Pirates</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{30 + i * 2} pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/U_Mumba_logo.svg/1200px-U_Mumba_logo.svg.png" alt="Team B" className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-semibold text-gray-800 text-sm">U Mumba</span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{28 + i} pts</span>
                  </div>
                </div>
                <p className="text-green-600 text-xs sm:text-sm mt-2 font-medium truncate">{i === 2 ? 'Match ongoing – 2 minutes left' : `Patna Pirates won by ${2 + i} points`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Blogs Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-3 sm:px-5 py-10 sm:py-14 mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Top Sports Buzz</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Fresh highlights, recaps & insights</p>
          </div>
          {blogs.length > 0 ? (
            <div className="columns-2 sm:columns-2 md:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="break-inside-avoid bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl"
                >
                  <div className={`w-full overflow-hidden ${getCardSizeClass(index)}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={blog.image || 'https://via.placeholder.com/300'}
                      alt={blog.title}
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {blog.title.length > 80 ? blog.title.slice(0, 77) + '...' : blog.title}
                    </h2>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                      {blog.description ? blog.description.slice(0, 100) + '...' : 'No description available.'}
                    </p>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline text-xs sm:text-sm font-medium"
                    >
                      Read Full Article →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-sm">No blogs available at the moment.</div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
