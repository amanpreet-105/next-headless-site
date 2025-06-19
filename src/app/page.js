import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_HOME_PAGE } from '@/lib/queries';
import Faq from "@/components/faq";
import Industries from "@/components/Industries/Industries";
import OurCertifications from "@/components/OurCertifications";
import Testimonials from "@/components/Testimonials";
import HomeBanner from "@/components/home-banner";
import AboutSection from "@/components/about";
import LatestBlogs from '@/components/blog/LatestBlogs';

const fetcher = async () => {
  const data = await fetchGraphQL(GET_HOME_PAGE, { slug: "18" });
  return data;
};

export default async function Home() {

  const data = await fetcher();
  const error = null;
  // const { data, error, isLoading } = useSWR('homepage', fetcher, {
  //   revalidateOnFocus: false, // Don't revalidate when window focuses
  //   refreshInterval: 15 * 60 * 1000, // Refresh every 15 minutes
  //   dedupingInterval: 5000, // Dedupe requests within 5 seconds
  // });

  if (error) return <p>Error loading homepage data</p>;
  // if (isLoading) return <p>Loading...</p>;

  const homeBannerData = data?.page?.homepage?.heroSection ?? null;
  const industryData = data?.page?.homepage?.industrySection ?? null;
  const twiData = data?.page?.homepage?.twi_sec ?? null;
  const faqData = data?.page?.homepage?.faqSection ?? null;
  const certificationData = data?.page?.homepage?.certificationSection ?? null;
  const blogData = data?.page?.homepage?.blogSection ?? null;
  const postsData = data?.posts ?? null;
  const testimonialsData = data?.testimonials ?? null;

  return (
    <>
      <HomeBanner secData={homeBannerData} />
      <AboutSection aboutData={twiData} />
      <Industries indsData={industryData} />
      <Faq faqData={faqData} />
      <OurCertifications certData={certificationData} />
      <Testimonials testimonialsData={testimonialsData} />
      <LatestBlogs blogData={blogData} postsData={postsData} />
    </>
  );
}