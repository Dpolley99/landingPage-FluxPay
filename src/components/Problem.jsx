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
    <section className="bg-white w-full flex flex-col items-center gap-20 pt-10 pb-20 px-16">
      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-archivo text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-[#0D0700] text-center">
              Built for a real problem
            </h2>
            <p className="font-raleway text-xl font-normal leading-[1.5] text-[#0D0700] text-center max-w-3xl">
              Household finance is fragmented and inefficient. We're solving this with a platform that brings clarity and control to everyday money management.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex gap-0 w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex flex-col justify-center items-center gap-1 px-6 py-4 ${
                  activeTab === index
                    ? 'border-b-2 border-[#01036A]'
                    : 'border-b border-transparent'
                } hover:bg-gray-50 transition`}
              >
                <h6 className="font-archivo text-[26px] font-medium leading-[1.4] tracking-[-0.01em] text-[#0D0700]">
                  {tab.title}
                </h6>
                <p className="font-raleway text-lg font-normal leading-[1.5] text-[#0D0700] text-center">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
          <div className="w-full h-[738px] rounded-lg overflow-hidden">
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

