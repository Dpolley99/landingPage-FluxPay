import { useState } from 'react';

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F2F2F2] w-full flex justify-center items-center py-0 px-4 sm:px-8 md:px-16 h-[72px] z-50">
      <div className="container flex justify-between items-center gap-4 md:gap-8 w-full max-w-[1440px]">
        <div className="hidden lg:flex flex-1 items-center gap-4 xl:gap-8">
          <div className="flex items-center gap-4 xl:gap-8">
            <a href="#product" className="text-[#0D0700] text-base xl:text-lg font-normal hover:opacity-80 transition">
              Product
            </a>
            <a href="#about" className="text-[#0D0700] text-base xl:text-lg font-normal hover:opacity-80 transition">
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-center gap-1 text-[#0D0700] text-base xl:text-lg font-normal hover:opacity-80 transition"
              >
                Resources
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0D0700] xl:w-6 xl:h-6">
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
        
        <div className="flex-1 flex items-center justify-start lg:justify-center">
          <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-7 sm:w-20 sm:h-8 md:w-24 md:h-9 xl:w-[84px] xl:h-[36px]">
            <text x="0" y="24" fontFamily="Archivo" fontSize="20" fontWeight="600" fill="#0D0700" className="text-base sm:text-lg md:text-xl xl:text-2xl">FluxPay</text>
          </svg>
        </div>
        
        <div className="flex-1 flex items-center justify-end gap-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0D0700] hover:opacity-80 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button className="hidden lg:block bg-[#01036A] border border-[#01036A] rounded-md px-2.5 py-1 text-white text-base xl:text-lg font-medium hover:opacity-90 transition">
            Sign up
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#F2F2F2] border-t border-[rgba(13,7,0,0.15)] p-4 flex flex-col gap-4 z-50">
          <a href="#product" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">Product</a>
          <a href="#about" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">About</a>
          <a href="#blog" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">Blog</a>
          <a href="#docs" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">Docs</a>
          <a href="#faq" className="text-[#0D0700] text-lg font-normal hover:opacity-80 transition">FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

