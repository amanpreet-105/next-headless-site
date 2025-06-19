'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AboutSection({aboutData}) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about-us";
  return (
    <>
      <section className="section-padding !pb-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start image-text-anchor">
            <div className="grid gap-3 justify-items-start">
              <h2 className="h2-title !mb-0 w-full" dangerouslySetInnerHTML={{ __html: aboutData?.twiTitle }} >
              </h2>
              <div className="text-[18px] leading-[30px]" dangerouslySetInnerHTML={{ __html: aboutData?.twiSubtitle }} >
              </div>
              <p>
                {aboutData?.twiSubtitle}
              </p>
              <ul className="grid lg:grid-cols-2 gap-3 font-medium w-full mt-3">
                {aboutData?.points && aboutData?.points?.length > 0 && aboutData?.points?.map((item, index) => (
                <li key={'about-point-'+index} className="relative pl-6 text-[18px] leading-[30px]">
                  <span className="mr-4 absolute top-[7px] left-0">
                    <Image
                      src="/images/checkicon.png"
                      width={16}
                      height={15}
                      alt="icon"
                    />
                  </span>
                  {item?.label ? item?.label : ''}
                </li>
                ))}
              </ul>
              <div className={`text-center mt-4 ${isAboutPage ? "hidden" : ""}`}>
                <Link className="custom-button block" href="#">
                  Read More
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="image-text-blk">
              {aboutData?.twiImage?.node?.sourceUrl && (
                <Image
                  src={aboutData?.twiImage?.node?.sourceUrl}
                  alt={aboutData?.twiImage?.node?.altText || "About Image"}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
