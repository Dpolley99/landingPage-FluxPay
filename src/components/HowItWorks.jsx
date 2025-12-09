import heroImage from '../assets/hero-image.png';

const HowItWorks = () => {
  return (
    <section className="bg-[#E5E5F0] w-full flex flex-col items-center gap-10 md:gap-16 py-16 xl:gap-20 pt-6 md:pt-12 md:pb-8 xl:py-16 px-4 sm:px-8 md:px-12 xl:px-16">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-20 w-full max-w-[1440px]">
        <div className="flex-1 flex flex-col justify-center items-start lg:items-end gap-6 md:gap-8 py-8 md:py-12 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 lg:pr-20 lg:pl-16">
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="font-roboto text-3xl sm:text-4xl md:text-5xl xl:text-[48px] font-bold leading-[1.2] text-[#000000]">
                See how FluxPay works
              </h2>
              <p className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-[1.5] text-[#000000]">
                The interface is built for speed and clarity. Pay bills, track spending, and manage rewards all from one clean dashboard.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button className="border border-[#000000] rounded-md px-6 py-3 text-[#000000] text-base sm:text-lg font-normal hover:opacity-80 transition w-full sm:w-auto">
                Demo
              </button>
              <button className="flex items-center justify-center gap-2 text-[#000000] text-base sm:text-lg font-normal hover:opacity-80 transition w-full sm:w-auto">
                View
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#000000] sm:w-6 sm:h-6">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px]">
          <img 
            src={heroImage} 
            alt="FluxPay Interface" 
            className="w-full h-full object-cover rounded-lg lg:rounded-none"
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

