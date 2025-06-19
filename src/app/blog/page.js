'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_BLOG_PAGE } from '@/lib/queries';
import { PreloadPostCursors } from '@/lib/preload-post-cursors'
import HeroSection from "@/components/globals/hero-section";
import useSWR from 'swr';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogPagination from '@/components/blog/BlogPagination';


const POSTS_PER_PAGE = 3;
const fetcher = ([query, variables]) => fetchGraphQL(query, variables);

function BlogPage() {
  const [cursors, setCursors] = useState([null]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function loadCursors() {
      const allCursors = await PreloadPostCursors(POSTS_PER_PAGE);
      setCursors(allCursors);
    }
    loadCursors();
  }, []);
  
  let pageParam = parseInt(searchParams.get('page') || '1', 10);
  pageParam = (pageParam > cursors.length) ? 1 : pageParam;

  const [currentPage, setCurrentPage] = useState(pageParam);

  

  const { data, error, isLoading  } = useSWR(
    [GET_BLOG_PAGE, {slug:191, first: POSTS_PER_PAGE, after: cursors[currentPage - 1] }],
    fetcher,
    { keepPreviousData: true,
      fallbackData:{
      page:{
        title: 'Blog Page',
        featuredImage:{
          node:{
            altText: 'banner-bg',
            sourceUrl: '/images/banner-bg.jpg',
          }
        },
        blogSection:{
          blogTitle: 'Blog',
          blogSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          blogPosts: [
            {
              title: 'Blog Post 1',
              subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              image: {
                node:{
                  altText: 'banner-bg',
                  sourceUrl: '/images/banner-bg.jpg',
                }
              }
            }
          ]
        }
      }
    }
  });

  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || {};
  const totalPages = cursors.length;

  useEffect(() => {
    if(pageParam > cursors.length)
    {
      setCurrentPage(1);
    }else{
      setCurrentPage(pageParam);
    }
  }, [pageParam]);

  const goToPage = (newPage) => {
    if(pageParam > cursors.length)
    {
      router.push(`/blog?page=1`);
    }else{
      router.push(`/blog?page=${newPage}`);
    }
  };

  const heroData = {
    title: data?.page?.title ,
    image: {
      altText: data?.page?.featuredImage?.node?.altText ,
      sourceUrl: data?.page?.featuredImage?.node?.sourceUrl ,
    }
  }
  
  return (
    <>
      <HeroSection heroData={heroData}  />
      <section className="section-padding">
        <div className="container">
          {isLoading && <p>Loading posts...</p>}
          {error && <p className="text-red-600">Failed to load posts.</p>}
          {!isLoading && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {/* Blog Card 1*/}
                    {posts.map((post) => (  
                      <BlogPostCard key={post.databaseId} post={post} />
                    ))}
              </div>
            
              <div className="flex gap-2 justify-center mt-6">
                <button
                  disabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={'page_' + i}
                    onClick={() => goToPage(i + 1)}
                    className={` px-3 py-1 rounded ${
                      currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {pageInfo?.hasNextPage && (
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    Next →
                  </button>
                )}
              </div>
              {/* <BlogPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(page) => {
                  router.push(`/blog?page=${page}`);
                }}
              /> */}
            </>
          )}  
        </div>
      </section>
    </>
  );
}

export default BlogPage
