import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';

const WhatWeDo = () => {
  const features = [
    {
      title: "Reliable bill payments",
      description: "Pay your household bills on time, every time, without the friction of managing multiple accounts and due dates.",
      image: feature1,
    },
    {
      title: "Unified financial view",
      description: "See all your bills and spending in one dashboard. No more scattered statements or forgotten payments.",
      image: feature2,
    },
    {
      title: "Rewards that matter",
      description: "Earn rewards from every transaction and redeem them through our marketplace. Your spending works for you.",
      image: feature3,
    },
  ];

  return (
    <section className="bg-white w-full flex flex-col items-center gap-10 md:gap-16 xl:gap-20 pt-12 pb-6 md:py-16 xl:py-20 px-4 sm:px-8 md:px-12 xl:px-16">
      <div className="flex flex-col items-center gap-10 md:gap-16 xl:gap-20 w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
            <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl xl:text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-[#0D0700] text-center">
              What we do
            </h2>
            <p className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-[1.5] text-[#0D0700] text-center max-w-3xl px-4">
              FluxPay handles the mechanics of household finance so you don't have to. Three core capabilities built for clarity and control.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-10 md:gap-12 xl:gap-16 w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 xl:gap-12 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 flex flex-col gap-6 md:gap-8">
                <div className="w-full h-[200px] sm:h-[250px] md:h-[220px] lg:h-[233.68px] rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-200 to-purple-200"></div>
                </div>
                <div className="flex flex-col items-center gap-4 md:gap-6">
                  <h4 className="font-archivo text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-medium leading-[1.3] tracking-[-0.01em] text-[#0D0700] text-center">
                    {feature.title}
                  </h4>
                  <p className="font-raleway text-base sm:text-lg font-normal leading-[1.5] text-[#0D0700] text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button className="border border-[rgba(13,7,0,0.15)] rounded-md px-4 sm:px-3 py-2 sm:py-1.5 text-[#0D0700] text-base sm:text-lg font-medium hover:opacity-80 transition w-full sm:w-auto">
            Learn
          </button>
          <button className="flex items-center justify-center gap-2 text-[#0D0700] text-base sm:text-lg font-medium hover:opacity-80 transition w-full sm:w-auto">
            Explore
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

