'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_BLOG_PAGE } from '@/lib/queries';
import { PreloadPostCursors } from '@/lib/preload-post-cursors'
import HeroSection from "@/components/globals/hero-section";
import useSWR from 'swr';
import BlogPostCard from '@/components/blog/BlogPostCard';

const POSTS_PER_PAGE = 3;
const fetcher = ([query, variables]) => fetchGraphQL(query, variables);

function BlogPage() {
  const [cursors, setCursors] = useState([null]);
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Get page from URL
  useEffect(() => {
    const urlPage = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(urlPage);
  }, [searchParams]);

  // ✅ Preload cursors
  useEffect(() => {
    async function loadCursors() {
      const allCursors = await PreloadPostCursors(POSTS_PER_PAGE);
      setCursors(allCursors);
    }
    loadCursors();
  }, []);

  const { data, error, isLoading } = useSWR(
    [GET_BLOG_PAGE, {
      slug: 191,
      first: POSTS_PER_PAGE,
      after: cursors[currentPage - 1] || null,
    }],
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || {};
  const totalPages = cursors.length;

  const goToPage = (newPage) => {
    router.push(`/blog?page=${newPage}`);
  };

  const heroData = {
    title: data?.page?.title,
    image: {
      altText: data?.page?.featuredImage?.node?.altText,
      sourceUrl: data?.page?.featuredImage?.node?.sourceUrl,
    }
  };

  return (
    <>
      <HeroSection heroData={heroData} />
      <section className="section-padding">
        <div className="container">
          {isLoading && <p>Loading posts...</p>}
          {error && <p className="text-red-600">Failed to load posts.</p>}
          {!isLoading && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
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
                    key={`page_${i}`}
                    onClick={() => goToPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default BlogPage;