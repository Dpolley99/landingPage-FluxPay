import { useState } from 'react';
import problem1 from '../assets/problem-1.png';
import problem2 from '../assets/problem-2.png';
import problem3 from '../assets/problem-3.png';

const Problem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Market opportunity",
      description: "Billions spent on household bills annually with minimal innovation in payment experience.",
      image: problem1,
    },
    {
      title: "Early traction",
      description: "Strong user engagement and retention metrics demonstrate real demand for this solution.",
      image: problem2,
    },
    {
      title: "Differentiated approach",
      description: "Rewards ecosystem creates a new revenue stream while delivering genuine value to users.",
      image: problem3,
    },
  ];

  return (
    <section className="bg-white w-full flex flex-col items-center gap-10 md:gap-16 xl:gap-20 pt-8 md:pt-10 pb-12 md:pb-16 xl:pb-20 px-4 sm:px-8 md:px-12 xl:px-16">
      <div className="flex flex-col items-center gap-10 md:gap-16 xl:gap-20 w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
            <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl xl:text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-[#0D0700] text-center">
              Built for a real problem
            </h2>
            <p className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-[1.5] text-[#0D0700] text-center max-w-3xl px-4">
              Household finance is fragmented and inefficient. We're solving this with a platform that brings clarity and control to everyday money management.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8 md:gap-12 xl:gap-16 w-full">
          <div className="flex flex-col md:flex-row gap-0 w-full overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex flex-col justify-center items-center gap-1 px-4 sm:px-6 py-4 min-w-[200px] ${
                  activeTab === index
                    ? 'border-b-2 md:border-b-2 border-[#01036A]'
                    : 'border-b md:border-b border-transparent'
                } hover:bg-gray-50 transition`}
              >
                <h6 className="font-archivo text-lg sm:text-xl md:text-2xl xl:text-[26px] font-medium leading-[1.4] tracking-[-0.01em] text-[#0D0700] text-center">
                  {tab.title}
                </h6>
                <p className="font-raleway text-sm sm:text-base md:text-lg font-normal leading-[1.5] text-[#0D0700] text-center">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[738px] rounded-lg overflow-hidden">
            <img 
              src={tabs[activeTab].image} 
              alt={tabs[activeTab].title}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-br from-blue-200 to-purple-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

