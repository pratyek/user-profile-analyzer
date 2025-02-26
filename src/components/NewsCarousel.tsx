import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  link?: string;
}

interface NewsCarouselProps {
  newsItems: NewsItem[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Setup auto-scrolling
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex(prevIndex => 
            prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 2000); // Scroll every 5 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [newsItems.length, isPaused]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex(prevIndex => 
            prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 5000);
    }
  };

  // Calculate visible indices
  const getVisibleIndices = () => {
    // Assuming we show 3 cards at a time on desktop, 2 on tablet, 1 on mobile
    let visibleCount = 3;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        visibleCount = 1;
      } else if (window.innerWidth < 1024) {
        visibleCount = 2;
      }
    }

    let indices = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % newsItems.length;
      indices.push(idx);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div 
      className="relative w-full py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Next news"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * (100 / visibleIndices.length)}%)` }}
        >
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex-none w-full md:w-1/2 lg:w-1/3 px-4 transition-opacity duration-300 ${
                visibleIndices.includes(index) ? 'opacity-100' : 'opacity-0 hidden lg:block'
              }`}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <img 
                    src={item.imageUrl || "/api/placeholder/400/320"} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded text-sm">
                    {item.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{item.summary}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      className="mt-3 inline-block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoScroll();
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;