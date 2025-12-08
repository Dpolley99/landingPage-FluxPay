import ctaImage from '../assets/cta-image.png';

const CTA = () => {
  return (
    <section className="bg-[#F2F2F2] w-full flex flex-col items-center gap-20 py-28 px-16">
      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex gap-20 w-full">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-archivo text-[60px] font-medium leading-[1.2] tracking-[-0.01em] text-[#0D0700]">
                Get early access
              </h2>
              <p className="font-raleway text-xl font-normal leading-[1.5] text-[#0D0700]">
                Join our waitlist to explore the future of household finance management.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-[513px]">
              <form className="flex gap-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-0 py-2 border-0 border-b border-[rgba(13,7,0,0.15)] bg-transparent text-lg font-normal text-[rgba(13,7,0,0.6)] placeholder:text-[rgba(13,7,0,0.6)] focus:outline-none focus:border-[#01036A]"
                />
                <button
                  type="submit"
                  className="bg-[#01036A] border border-[#01036A] rounded-md px-3 py-1.5 text-white text-lg font-medium hover:opacity-90 transition whitespace-nowrap"
                >
                  Request access
                </button>
              </form>
              <p className="font-raleway text-xs font-normal leading-[1.5] text-[#0D0700]">
                By clicking Request access you're confirming that you agree with our Terms and Conditions.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-lg overflow-hidden">
            <img 
              src={ctaImage} 
              alt="Early Access" 
              className="w-full h-full object-cover"
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

export default CTA;

