'use client'
import Faq from '@/components/faq';
import HeroSection from "@/components/globals/hero-section";
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_FAQ_PAGE } from '@/lib/queries';
import useSWR from 'swr';

const fetcher = async () => {
  const data = await fetchGraphQL(GET_FAQ_PAGE, { slug: "178" });
  return data;
};

function FAQpage() {

  const { data, error, isLoading } = useSWR('faq-page', fetcher, {
    revalidateOnFocus: false, // Don't revalidate when window focuses
    refreshInterval: 15 * 60 * 1000, // Refresh every 15 minutes
    dedupingInterval: 5000, // Dedupe requests within 5 seconds
    fallbackData:{
      page:{
        title: 'FAQ`s',
        featuredImage:{
          node:{
            altText: 'banner-bg',
            sourceUrl: '/images/banner-bg.jpg',
          }
        },
        faqPage:{
          faqTitle: '<span>Frequently</span> Asked Questions',
          faqPoints: [
            {
              title: 'What is the purpose of this website?',
              subtitle: 'This is the subtitle of the question',
              content: 'This is the content of the question',
            }
          ]
        }
      }
    }
  });

  const heroData = {
    title: data?.page?.title, 
    image: {
      altText: data?.page?.featuredImage?.node?.altText ,
      sourceUrl: data?.page?.featuredImage?.node?.sourceUrl ,
    }
  }

  return (
    <>
      <HeroSection heroData={heroData} />
      <Faq faqData={data?.page?.faqPage }/>
    </>
  );
}

export default FAQpage