'use client';

import HeroSection from '@/components/globals/hero-section';
import OurCertifications from '@/components/OurCertifications'
import React from 'react'
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_ABOUT_US_PAGE } from '@/lib/queries';
import useSWR from 'swr';
import SeoMeta from '@/components/globals/SeoMeta';

const fetcher = async () => {
  const data = await fetchGraphQL(GET_ABOUT_US_PAGE, { slug: "25" });
  return data;
};

function page() {
  const { data, error, isLoading } = useSWR('about-us-page', fetcher, {
    revalidateOnFocus: false, // Don't revalidate when window focuses
    refreshInterval: 15 * 60 * 1000, // Refresh every 15 minutes
    dedupingInterval: 5000, // Dedupe requests within 5 seconds
    fallbackData:{
      page:{
        title: 'About Us',
        featuredImage:{
          node:{
            altText: 'banner-bg',
            sourceUrl: '/images/banner-bg.jpg',
          }
        },
        aboutUsPage:{
          certificationSec:{
            certificationTitle: 'Our Certifications',
            certificationSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            videoCover:{
              node:{
                altText: 'banner-bg',
                sourceUrl: '/images/banner-bg.jpg',
              }
            },
            cards: [
              { icon:null, title: 'Certification 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
              { icon:null, title: 'Certification 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            ]
          }
        }
      }
    }
  });
  
  const heroData = {
    title: data?.page?.title ,
    image: {
      altText: data?.page?.featuredImage?.node?.altText ,
      sourceUrl: data?.page?.featuredImage?.node?.sourceUrl ,
    }
  }
  return (
    <>
      <SeoMeta metaData={data?.page?.seo ?? null} />
      <HeroSection heroData={heroData} />
      <OurCertifications certData={data?.page?.aboutUsPage?.certificationSec} />
    </>
  )
}

export default page