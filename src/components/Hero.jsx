import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="bg-[#E5E5F0] w-full flex flex-col gap-20 h-[900px]">
      <div className="flex flex-1 w-full">
        <div className="flex-1 flex flex-col justify-center items-end gap-8 px-16 py-0 pr-20 pl-16">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-6">
              <h1 className="font-archivo text-[84px] font-medium leading-[1.1] tracking-[-0.01em] text-[#0D0700]">
                Household bills, simplified
              </h1>
              <p className="font-raleway text-xl font-normal leading-[1.5] text-[#0D0700]">
                FluxPay makes it easy to pay your everyday bills and see your finances clearly in one place. Manage what matters without the complexity.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#01036A] border border-[#01036A] rounded-md px-3 py-1.5 text-white text-lg font-medium hover:opacity-90 transition">
                Preview
              </button>
              <button className="border border-[rgba(13,7,0,0.15)] rounded-md px-3 py-1.5 text-[#0D0700] text-lg font-medium hover:opacity-80 transition">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
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

