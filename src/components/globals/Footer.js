"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterTop from "./FooterTop";  
import { Footer_Section } from "../../lib/queries";
import { fetchGraphQL } from '@/lib/graphql-client';
import useSWR from 'swr';

const fetcher = async () => {
    const data = await fetchGraphQL(Footer_Section);
    return data;
  };

function Footer() {

  const { data, error, isLoading } = useSWR('footer', fetcher, {
    revalidateOnFocus: false, // Don't revalidate when window focuses
    refreshInterval: 15 * 60 * 1000, // Refresh every 60 minutes
    dedupingInterval: 5000, // Dedupe requests within 5 seconds
  });

  
  const contactInfo = data?.commonFields?.postFields?.contactInfo ? data?.commonFields?.postFields?.contactInfo : null;
  const quickLinks = data?.commonFields?.postFields?.footerSection?.quickLinks ? data?.commonFields?.postFields?.footerSection?.quickLinks : null;
  const copyright = data?.commonFields?.postFields?.copyright ? data?.commonFields?.postFields?.copyright : null;
  const footerFirstSection = data?.commonFields?.postFields?.footerSection ? data?.commonFields?.postFields?.footerSection : null;
  const socialMedia = data?.commonFields?.postFields?.footerSection?.followLinks ? data?.commonFields?.postFields?.footerSection?.followLinks : null;

  if (error) return <p>{error}</p>;
  
  return (
    <>
      <FooterTop />
      <footer className="bg-black text-white">
        <div className="container py-14">
          {/* main footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex md:gap-10 gap-6">
            {/* logo */}
            <div className="flex flex-col items-start xl:w-1/4">
              { footerFirstSection?.footerLogo?.node && footerFirstSection?.footerLogo?.node?.sourceUrl && (
                <Link href="/" className="w-full">
                  <Image
                    width={150}
                    height={100}
                    src={footerFirstSection?.footerLogo?.node?.sourceUrl}
                    alt={footerFirstSection?.footerLogo?.node?.altText}
                  className="w-auto mb-4"
                  />
                </Link>
              )}
              { footerFirstSection?.footerLogoContent && ( 
                <p className="text-white font-normal text-base leading-6" dangerouslySetInnerHTML={{__html: footerFirstSection?.footerLogoContent ? footerFirstSection?.footerLogoContent : '' }}></p>
              )}              
            </div>
            {/* logo end */}

            {/* quick links */}
            <div className="flex flex-col xl:w-1/3">
              <h3 className="font-bold mb-5 text-xl leading-7 font-crimson">
                Quick Links
              </h3>
              <ul className="grid  sm:grid-cols-2 gap-3">
                { quickLinks && quickLinks.map((item, index) => (
                    <li
                      key={'quick-link-'+index}
                      className="flex items
                    center relative pl-[30px] font-normal text-[18px] leading-[30px] m-0"
                  >
                    <span className="mr-4 absolute top-[5px] left-0">
                      <Image
                        src="/images/checkicon.png"
                        width={16}
                        height={15}
                        alt="icon"
                      />
                    </span>
                    <Link href={item?.link?.url} className="hover:text-primary">
                      {item?.link?.title}
                    </Link>
                  </li>
                ))}                
              </ul>
            </div>
            {/* quick links end */}

            { contactInfo && (
              <div className="flex flex-col xl:w-1/4">
                <h3 className="font-bold mb-5 text-xl leading-7 font-crimson">
                  Contact Info
                </h3>
                <ul className="flex flex-wrap gap-3.5">
                  { contactInfo && contactInfo?.address && (
                    <li className="flex items-center relative pl-[30px] font-normal text-[18px] leading-[30px] m-0">
                      <span className="mr-4 absolute top-[5px] left-0 ">
                        <Image
                          src="/images/location.png"
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <p dangerouslySetInnerHTML={{__html: contactInfo?.address}}></p>
                    </li>
                  )}
                  { contactInfo && contactInfo?.telephone && (
                    <li className="flex items-center relative pl-[30px] font-normal text-[18px] leading-[30px] m-0 w-full">
                      <span className="mr-4 absolute top-[7px] left-0">
                        <Image
                          src="/images/phone-call.png"
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>

                      <Link href={`tel:${contactInfo?.telephone}`} className="hover:text-primary">
                        { contactInfo?.telephone }
                      </Link>
                    </li>
                  )}
                  { contactInfo && contactInfo?.telephone2 && (
                    <li className="flex items-center relative pl-[30px] font-normal text-[18px] leading-[30px] m-0 w-full">
                      <span className="mr-4 absolute top-[7px] left-0">
                        <Image
                          src="/images/fax-icon.png"
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <Link href={`fax:${contactInfo?.telephone2}`} className="hover:text-primary">
                        { contactInfo?.telephone2 }
                      </Link>
                    </li>
                  )}
                  { contactInfo && contactInfo?.email && (
                    <li className="flex items-center relative pl-[30px] font-normal text-[18px] leading-[30px] m-0">
                      <span className="mr-4 absolute top-[7px] left-0">
                        <Image
                          src="/images/email.png"
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <Link
                        href={`mailto:${contactInfo?.email}`}
                        className="hover:text-primary"
                      >
                        { contactInfo?.email }
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
            {/* contact info end */}

            {/* social media */}
            <div className="flex flex-col xl:w-1/5">
              <h3 className="font-bold mb-5 text-xl leading-7 font-crimson">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                { socialMedia && socialMedia?.map((item, index) => (
                  <Link
                    target="_blank"
                    key={'social-media-'+index}
                    href={item?.shareLink?.url}
                    className="hover:mt-[-5px] transition ease-in-out delay-150 text-xl"
                >
                  <img
                    src={item?.icon?.node?.sourceUrl}
                    alt={item?.icon?.node?.altText}
                  />
                </Link>
                ))}
              </div>
            </div>
            {/* social media end*/}
          </div>
        </div>

        {/* copywrite */}
        { copyright && (
          <div className="container w-full py-4 border-t border-white flex items-center justify-between md:py-6 max-lg:flex-col-reverse  gap-3 text-center">
            <div className="text-sm sm:text-center">
              <div dangerouslySetInnerHTML={{ __html: copyright?.copyrightLeftContent }}></div>
              <Link
                href="https://www.kinexmedia.com/"
                target="_blank"
                className="ms-1 hover:underline hover:text-primary"
              >
                Kinex Media
              </Link>
            </div>
            <ul className="flex flex-wrap gap-4 items-center justify-center text-sm font-medium sm:mt-0 footer-border divide-x-1 divide-gray-200">
              { copyright && copyright.copyrightLinkRight && copyright.copyrightLinkRight.map((link, index) => (
                <li className="pr-4" key={index}>
                  <Link href={link?.url} className="hover:underline hover:text-primary">
                    { link?.title }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </footer>
    </>
  );
}

export default Footer;
