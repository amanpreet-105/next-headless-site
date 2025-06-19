import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function OurCertifications({certData}) {
  
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start image-text-anchor">
            <div className="grid gap-3 justify-items-start lg:order-2 max-lg:text-center">
              <h2 className="h2-title !mb-0 w-full" dangerouslySetInnerHTML={{ __html: certData?.certificationTitle ? certData?.certificationTitle : '' }}>
              </h2>
              <p className="">
                {certData?.certificationSubtitle ? certData?.certificationSubtitle : ''}
              </p>
              {/* three grid */}
              <div className="w-full grid sm:grid-cols-3 justify-center lg:gap-8 gap-5 mt-4">
                {/* 1 */}
                {certData?.cards && certData?.cards?.length > 0 && certData?.cards?.map((point, index) => (
                  <div key={'cert-point-' + index} className="flex flex-col gap-2.5">
                    <div className="w-full">
                      {point?.icon != null && point?.icon?.node?.sourceUrl &&
                        ( <Image
                          src={point?.icon?.node?.sourceUrl ? point?.icon?.node?.sourceUrl : null}
                          alt="icon"
                          width={50}
                          height={50}
                          className="inline-block"
                        />
                      )} 
                      {!point?.icon?.node?.sourceUrl && (
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-500 text-2xl font-bold">img</span>
                        </div>
                      )}

                    </div>
                    <div className="grid gap-1.5">
                      <h3 className="font-semibold">{point?.title ? point?.title : ''}</h3>
                      <p className="">
                        {point?.content ? point?.content : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:order-1 group">
              <div className="image-text-blk">
                {certData?.videoCover?.node?.sourceUrl && (
                  <Image
                    src={certData.videoCover.node.sourceUrl}
                    alt="Certifications"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                {!certData?.videoCover?.node?.sourceUrl && (
                  <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">img</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <Link
                    href="#"
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg ease-in-out duration-300 group-hover:scale-[0.8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 text-primary hover:text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 17l6-5-6-5v10z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCertifications;