
import React from 'react';
import { YOUTUBE_GROWTH_FEATURES, FEATURED_YOUTUBE_VIDEOS } from '../constants';
import GlassCard from './GlassCard'; // Reusing GlassCard for feature items

const YouTubeGrowthSection: React.FC = () => {
  return (
    <section id="youtube-growth" className="py-16 md:py-24 bg-gray-50"> {/* Consistent background with other sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* The large "YouTube" title remains as styled previously */}
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold tracking-tighter accent-gradient-text mb-4 md:mb-6">
            YouTube
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Your Business's Next <span className="accent-gradient-text">Revenue Stream</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            While your competitors fight for attention on platforms that don't pay, smart businesses are building income streams on YouTube. 
            With <strong className="font-semibold text-purple-600">2.7 billion monthly users</strong> watching <strong className="font-semibold text-purple-600">1 billion hours daily</strong>, it's the only major platform that actually pays you to build an audience. 
            Every video becomes a 24/7 asset working for your business—generating leads, establishing authority, and creating revenue that compounds over time. 
            Your expertise could be earning you thousands monthly, but only if you're where your customers are actively searching for solutions. 
            Stop leaving money on the table while others claim their share of the world's <strong className="font-semibold text-purple-600">second-largest search engine</strong>.
          </p>
        </div>

        {/* <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
          <img 
            src="/diamond-network.jpeg" 
            alt="Abstract visualization of interconnected crystalline diamond-like structures with light refractions" 
            className="w-full h-auto rounded-xl shadow-xl object-cover aspect-[16/9]"
          />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {YOUTUBE_GROWTH_FEATURES.map((feature, index) => (
            <GlassCard key={feature.id} className="flex flex-col p-6 text-center md:text-left">
              <div className="mb-4 md:mb-5 flex justify-center md:justify-start">
                <span className="inline-block accent-gradient-bg text-white text-2xl font-inter font-bold rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-inter font-semibold tracking-tight text-[#1a1a1a] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-inter">{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Featured YouTube Videos Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl font-inter font-semibold tracking-tight text-[#1a1a1a] text-center mb-8 md:mb-12">
            Our Work <span className="accent-gradient-text">in Action</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"> {/* Changed max-w-6xl to max-w-4xl for a tighter 2x2 grid appearance & lg:grid-cols-3 to lg:grid-cols-2 */}
            {FEATURED_YOUTUBE_VIDEOS.map(video => (
              <div key={video.id} className="rounded-xl overflow-hidden shadow-xl bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="aspect-video"> {/* Maintains 16:9 aspect ratio */}
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                 {/* Optional: Add a small caption area below video if needed 
                 <div className="p-3 text-center">
                   <p className="text-sm font-inter text-gray-700">{video.title}</p>
                 </div>
                 */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeGrowthSection;
