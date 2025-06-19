import React from 'react'
import Link from 'next/link';

function HomeBanner({ secData }) {

  const title = secData?.heroSectionText ? secData?.heroSectionText : '';
  const title2 = secData?.heroSectionText2 ? secData?.heroSectionText2 : '';
  let link = secData?.heroSectionLink?.url ? secData?.heroSectionLink?.url.split('/') : '';
  if(link.length > 0){
    link = link.pop() == '' ? '/' + link.pop(-1) : '/' + link.pop() + '/' + link.pop();
  }
  
  const linkTitle = secData?.heroSectionLink?.title ? secData?.heroSectionLink?.title : '';
  const heroSectionImage = secData?.heroSectionImage?.node?.sourceUrl ? secData?.heroSectionImage?.node?.sourceUrl : null;
  
  return (
    <>
      <section 
        className="relative w-full h-[90vh] bg-cover bg-[top_0px_right_-50px] xl:bg-right-top bg-no-repeat" 
        style={{ backgroundImage: `url(${heroSectionImage !== null ? heroSectionImage : ''})` }}
      >
        <div className="flex absolute inset-0 bg-black opacity-30 max-lg:hidden"></div>
        <div className="container h-full flex items-center relative z-10 max-lg:hidden">
          <div className="w-full md:w-full mb-8">
            <h1 className="font-crimson text-5xl 2xl:text-[70px] text-white">
              {title}
            </h1>
            <h2 className="font-crimson text-5xl 2xl:text-[70px] text-white mt-3">
              {title2}
            </h2>
            <div className="text-center mt-8 inline-block">
              <Link href={link} className="custom-button block">
                  {linkTitle}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-0.5 left-0 right-0 max-lg:hidden">
          <svg
            viewBox="0 0 1440 120"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* ipad */}
      <section className="section-padding bg-black lg:hidden">
        <div className="container">
          <div className="flex 2xl:items-center relative z-10 text-center">
            <div className="w-full md:w-full">
              <h1 className="font-customHeading max-sm:text-[30px] text-[40px] text-white leading-none">
                {title}
              </h1>
              <h2 className="font-customHeading max-sm:text-[30px] text-[40px] text-white leading-none mt-3">
                {title2}
              </h2>
              <div className="text-center mt-8 inline-block">
                <Link href={link} className="custom-button block">
                  {linkTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;