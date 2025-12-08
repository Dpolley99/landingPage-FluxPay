import { useState } from 'react';

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="bg-[#F2F2F2] w-full flex justify-center items-center py-0 px-0 h-[72px]">
      <div className="container flex justify-center items-center gap-8 w-full">
        <div className="flex-1 flex items-center gap-8">
          <div className="flex items-center gap-8">
            <a href="#product" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">
              Product
            </a>
            <a href="#about" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-center gap-1 text-[#0D0700] text-lg font-normal hover:opacity-80 transition"
              >
                Resources
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0D0700]">
                  <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-8 left-0 bg-[#F2F2F2] border border-[rgba(13,7,0,0.15)] rounded-lg p-6 flex flex-col gap-4 min-w-[200px] z-50">
                  <a href="#blog" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">
                    Blog
                  </a>
                  <a href="#docs" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">
                    Docs
                  </a>
                  <a href="#faq" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <svg width="100" height="36" viewBox="0 0 84 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="24" fontFamily="Archivo" fontSize="24" fontWeight="600" fill="#0D0700">FluxPay</text>
          </svg>
        </div>
        
        <div className="flex-1 flex justify-end items-center">
          <button className="bg-[#01036A] border border-[#01036A] rounded-md px-2.5 py-1 text-white text-lg font-medium hover:opacity-90 transition">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

