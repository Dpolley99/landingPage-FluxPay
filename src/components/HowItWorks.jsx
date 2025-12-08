const HowItWorks = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center gap-20 py-0 px-16">
      <div className="flex gap-20 w-full">
        <div className="flex-1 flex flex-col justify-center items-end gap-8 py-28 px-16 pr-20 pl-16">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="font-roboto text-[48px] font-bold leading-[1.2] text-[#000000]">
                See how FluxPay works
              </h2>
              <p className="font-raleway text-xl font-normal leading-[1.5] text-[#000000]">
                The interface is built for speed and clarity. Pay bills, track spending, and manage rewards all from one clean dashboard.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="border border-[#000000] rounded-md px-6 py-3 text-[#000000] text-lg font-normal hover:opacity-80 transition">
                Demo
              </button>
              <button className="flex items-center gap-2 text-[#000000] text-lg font-normal hover:opacity-80 transition">
                View
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#000000]">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <img 
            src="/images/hero-image.png" 
            alt="FluxPay Interface" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

