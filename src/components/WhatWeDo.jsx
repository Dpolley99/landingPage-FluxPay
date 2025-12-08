const WhatWeDo = () => {
  const features = [
    {
      title: "Reliable bill payments",
      description: "Pay your household bills on time, every time, without the friction of managing multiple accounts and due dates.",
      image: "/images/feature-1.png",
    },
    {
      title: "Unified financial view",
      description: "See all your bills and spending in one dashboard. No more scattered statements or forgotten payments.",
      image: "/images/feature-2.png",
    },
    {
      title: "Rewards that matter",
      description: "Earn rewards from every transaction and redeem them through our marketplace. Your spending works for you.",
      image: "/images/feature-3.png",
    },
  ];

  return (
    <section className="bg-white w-full flex flex-col items-center gap-20 py-20 px-16">
      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-archivo text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-[#0D0700] text-center">
              What we do
            </h2>
            <p className="font-raleway text-xl font-normal leading-[1.5] text-[#0D0700] text-center max-w-3xl">
              FluxPay handles the mechanics of household finance so you don't have to. Three core capabilities built for clarity and control.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-16 w-full">
          <div className="flex gap-12 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 flex flex-col gap-8">
                <div className="w-full h-[233.68px] rounded-lg overflow-hidden">
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
                <div className="flex flex-col items-center gap-6">
                  <h4 className="font-archivo text-[40px] font-medium leading-[1.3] tracking-[-0.01em] text-[#0D0700]">
                    {feature.title}
                  </h4>
                  <p className="font-raleway text-lg font-normal leading-[1.5] text-[#0D0700]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="border border-[rgba(13,7,0,0.15)] rounded-md px-3 py-1.5 text-[#0D0700] text-lg font-medium hover:opacity-80 transition">
            Learn
          </button>
          <button className="flex items-center gap-2 text-[#0D0700] text-lg font-medium hover:opacity-80 transition">
            Explore
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

