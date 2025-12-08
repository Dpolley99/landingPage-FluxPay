const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 8H8C6.9 8 6 8.9 6 10V38C6 39.1 6.9 40 8 40H40C41.1 40 42 39.1 42 38V10C42 8.9 41.1 8 40 8ZM40 12L24 22L8 12H40ZM8 36V14L24 24L40 14V36H8Z" fill="#0D0700"/>
        </svg>
      ),
      title: "Email",
      value: "hello@fluxpay.io",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.62 31.79C37.22 31.79 34.9 31.41 32.72 30.69C31.97 30.41 31.15 30.56 30.52 31.05L27.41 33.78C22.17 31.62 16.38 25.83 14.22 20.59L16.95 17.48C17.44 16.85 17.59 16.03 17.31 15.28C16.59 13.1 16.21 10.78 16.21 8.38C16.21 7.28 15.33 6.4 14.23 6.4H8.38C7.28 6.4 6 6.9 6 8.38C6 26.61 21.39 42 39.62 42C41.1 42 41.6 40.72 41.6 39.62V33.77C41.6 32.67 40.72 31.79 39.62 31.79Z" fill="#0D0700"/>
        </svg>
      ),
      title: "Phone",
      value: "+61 2 8000 0000",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C16.27 4 10 10.27 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.27 31.73 4 24 4ZM24 22C21.79 22 20 20.21 20 18C20 15.79 21.79 14 24 14C26.21 14 28 15.79 28 18C28 20.21 26.21 22 24 22Z" fill="#0D0700"/>
        </svg>
      ),
      title: "Office",
      value: "Level 2, 123 Pitt Street, Sydney NSW 2000",
    },
  ];

  return (
    <section className="bg-white w-full flex flex-col items-center gap-10 md:gap-16 xl:gap-20 py-12 md:py-20 xl:py-28 px-4 sm:px-8 md:px-12 xl:px-16">
      <div className="flex flex-col items-center gap-10 md:gap-16 xl:gap-20 w-full max-w-[1440px]">
        <div className="flex flex-col sm:flex-row gap-8 md:gap-10 xl:gap-12 w-full">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                {info.icon}
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h4 className="font-archivo text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-medium leading-[1.3] tracking-[-0.01em] text-[#0D0700]">
                  {info.title}
                </h4>
                <p className="font-raleway text-base sm:text-lg font-normal leading-[1.5] text-[#0D0700]">
                  {info.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

