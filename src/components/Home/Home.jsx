import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            category: 'sports',
            lang: 'en',
            country: 'us',
            max: 10,
            apikey: '5eed3c7f648610ff6e1c1d92be607d30',
          },
        });

        const blogData = response.data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          image: article.image, // GNews uses `image`, not `urlToImage`
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
        <div className="container px-3 sm:px-5 py-0 mt-7 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Cricket</h1>
            <Link
              to="/cricket"
              className="inline-flex items-center gap-1 px-2 py-0.5 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors duration-200"
            >
              More
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

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
        <div className="container px-3 sm:px-5 py-0 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Football</h1>
            <Link
              to="/football"
              className="inline-flex items-center gap-1 px-2 py-0.5 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors duration-200"
            >
              More
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>


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
        <div className="container px-3 sm:px-5 py-0 mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-8">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Kabaddi</h1>
            <Link
              to="/kabaddi"
              className="inline-flex items-center gap-1 px-2 py-0.5 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors duration-200"
            >
              More
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>


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
      <section className="py-10 px-4 sm:px-8 lg:px-16 bg-white">
        <h2 className="text-2xl font-semibold text-center text-black mb-8">Trendy Sports Buzz</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition border border-transparent hover:border-black"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog Thumbnail"
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {blog.title.length > 80 ? blog.title.slice(0, 77) + '...' : blog.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {blog.description?.length > 100 ? blog.description.slice(0, 97) + '...' : blog.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;