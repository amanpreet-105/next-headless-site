import React from 'react';
import Image from "next/image"; 
import Link from 'next/link';

function LatestBlogs({blogData, postsData}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-5 text-center mb-8">
          <h2 className="h2-title !mb-0 w-full" dangerouslySetInnerHTML={{__html: blogData?.title}}>
          </h2>
          <p className="lg:max-w-1/2 mx-auto font-medium">
            { blogData?.content }
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {postsData?.nodes?.map((post, index) => (
            <div key={'post-' + index} className="bg-white shadow-lg group border border-gray-200 hover:border-primary transition duration-300">
              <div className="w-full h-80 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all group-hover:duration-300 group-hover:scale-110"
                  src="/images/blog3.jpg"
                  alt="Blog Image"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-base py-1.5 px-4 bg-gray-100 border-l-4 my-3 group-hover:border-l-primary">
                  {formatDate(post?.date)} | {post?.author?.node?.name}
                </span>
                <h3 className="font-crimson 2xl:text-2xl md:text-xl font-semibold line-clamp-2">
                  {post?.title}
                </h3>
                <p className="mt-2 line-clamp-3">
                  {post?.excerpt}
                </p>
                <Link
                  href={`blog/${post?.uri}`}
                  className="underline inline-block font-semibold mt-4 group-hover:text-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* view more */}
        <div className="text-center mt-12">
          <Link href={blogData?.link?.url ? blogData?.link?.url : '#'} className="custom-button">
            {blogData?.link?.title ? blogData?.link?.title : 'View Blogs'}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs