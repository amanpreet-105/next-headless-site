import React from 'react'

function HeroSection({heroData}) {
  return (
    <>
      <section className="bg-no-repeat bg-cover bg-hero-pattern relative" style={{backgroundImage: `url(${heroData?.image?.sourceUrl ?? ''})`}}>
        <div className="container flex items-center justify-center h-52 lg:h-80">
          <div className="absolute inset-0 bg-black z-10 opacity-[0.2]"></div>
          <h1 className="text-white font-crimson font-bold text-3xl lg:text-[50px] z-10">
            {heroData?.title ?? 'Page Heading'}
          </h1>
        </div>
      </section>
    </>
  );
}

export default HeroSection