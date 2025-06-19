import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Industries({indsData}) {

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-5 text-center mb-8">
            <h2 className="h2-title !mb-0 w-full" dangerouslySetInnerHTML={{ __html: indsData?.industrySecTitle ? indsData?.industrySecTitle : '' }} >
            </h2>
            <p className="mx-auto font-medium">
              {indsData?.industrySecSubtitle ? indsData?.industrySecSubtitle : ''}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-8">
            {/* 1 */}
            {indsData?.industryCards && indsData?.industryCards?.length > 0 && indsData?.industryCards?.map((card, index) => (
              <div key={'industry-card-' + index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-primary/30 focus:shadow-primary/30 active:shadow-primary/30 md:px-7 xl:px-10 text-center group transition-all">
                <div className="inline-block mb-4">
                  {card?.image?.node?.sourceUrl && (
                    <Image
                      src={card?.image?.node?.sourceUrl }
                      width={100}
                      height={100}
                      alt="Retail"
                      className="transition-all border border-dashed p-1.5 border-black group-hover:border-primary rounded-full"
                      />
                  )}
                  {!card?.image?.node?.sourceUrl && (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-2xl font-bold">+</span>
                    </div>
                  )}
                </div>
                <h4 className="transition-all text-2xl md:text-3xl font-crimson font-semibold group-hover:text-primary">
                  {card?.title ? card?.title : ''}
                </h4>
                <p className="mt-2">
                  {card?.content ? card?.content : ''}
                </p>
              </div>
            ))}
          </div>
          {/* view more */}
          <div className="text-center mt-12">
            <Link href={indsData?.industryLink?.url ? indsData?.industryLink?.url : '#'} className="custom-button">
              {indsData?.industryLink?.title ? indsData?.industryLink?.title : 'View More'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Industries