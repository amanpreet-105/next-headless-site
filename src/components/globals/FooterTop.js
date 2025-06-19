'use client';
import React from 'react';
import Link from 'next/link';
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_FOOTER_TOP } from '@/lib/queries';
import { useState } from 'react';
import useSWR from 'swr';

function FooterTop() {
  
  const fetcher = async () => {
    const data = await fetchGraphQL(GET_FOOTER_TOP);
    return data;
  };

  const { data, error, isLoading } = useSWR('footer-top', fetcher, {
    revalidateOnFocus: false, // Don't revalidate when window focuses
    refreshInterval: 15 * 60 * 1000, // Refresh every 60 minutes
    dedupingInterval: 5000, // Dedupe requests within 5 seconds
  });
  
  return (
    <>
      <div className="bg-[url('/images/our-experts.jpg')] bg-cover bg-center section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center lg:gap-8 gap-5">
            <h2 className="h2-title !mb-0" dangerouslySetInnerHTML={{__html: data?.commonFields?.postFields?.footerTopSection?.title ?? ''}}>
            </h2>
            <p className="text-2xl font-medium" dangerouslySetInnerHTML={{__html: data?.commonFields?.postFields?.footerTopSection?.content ?? ''}}>
            </p>
            {data?.commonFields?.postFields?.footerTopSection?.link?.url && (
              <Link href={data?.commonFields?.postFields?.footerTopSection?.link?.url } className="custom-button">
                {data?.commonFields?.postFields?.footerTopSection?.link?.title ?? 'Contact Us'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;