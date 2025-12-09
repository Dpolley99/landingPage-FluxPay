import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="bg-[#E5E5F0] w-full flex flex-col gap-10 md:gap-16 xl:gap-20 min-h-[600px] md:min-h-[700px] lg:h-[820px] xl:h-[930px] pt-[72px]">
      <div className="flex flex-col lg:flex-row flex-1 w-full max-w-[1440px] mx-auto">
        <div className="flex-1 flex flex-col justify-center items-start lg:items-end gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-0 lg:pr-20 lg:pl-16">
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="font-archivo text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-medium leading-[1.1] tracking-[-0.01em] text-[#0D0700]">
                Your finances, simplified
              </h1>
              <p className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-[1.5] text-[#0D0700]">
                Track finances clearly, pay everyday bills routinely and earn rewards in one place. Manage what matters without the complexity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#01036A] border border-[#01036A] rounded-md px-4 sm:px-3 py-2 sm:py-1.5 text-white text-base sm:text-lg font-medium hover:opacity-90 transition w-full sm:w-auto">
                Preview
              </button>
              <button className="border border-[rgba(13,7,0,0.15)] rounded-md px-4 sm:px-3 py-2 sm:py-1.5 text-[#0D0700] text-base sm:text-lg font-medium hover:opacity-80 transition w-full sm:w-auto">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full xl:h-full">
          <img 
            src={heroImage} 
            alt="FluxPay Dashboard" 
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

export default Hero;

