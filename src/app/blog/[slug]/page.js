'use client';
import { useParams } from 'next/navigation';
import HeroSection from "@/components/globals/hero-section";
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_BLOG_POST } from '@/lib/queries';
import Image from 'next/image';
import useSWR from 'swr';


export default function BlogPost() {
    const { slug } = useParams();

    const fetcher = async () => {
        const data = await fetchGraphQL(GET_BLOG_POST, { slug: slug });
        return data;
    };
    const { data, error, isLoading  } = useSWR(
        'single-post',
        fetcher,
        { keepPreviousData: true,
            fallbackData:{
            post:{
                title: 'Single Post',
                featuredImage:{
                    node:{
                        altText: 'banner-bg',
                        sourceUrl: '/images/banner-bg.jpg',
                    }
                }
            }
        }
    });

    const post = data?.post;

    let formattedDate = '';
    if(post?.date){
        const date = new Date(post.date);
        formattedDate = date.toLocaleDateString('en-US', { year: 'numeric',month: 'short',day: '2-digit',}).replace(' ', '').replace(',', ',');
    }

    const heroData = {
        title: post?.title ,
            image: {
                altText: post?.featuredImage?.node?.altText ,
                sourceUrl: post?.featuredImage?.node?.sourceUrl ,
        }
    }
    
    if(isLoading) return 'Loading...';

    return (
        <div>
            <HeroSection heroData={heroData} />
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">{ post?.title }</h1>
                    <p className="text-gray-600">Published by { post?.author?.node?.name} | Date { formattedDate } </p>
                </div>

                <Image 
                    src={post?.featuredImage?.node?.sourceUrl } 
                    alt={post?.featuredImage?.node?.altText } 
                    className="mb-8 rounded-lg shadow-lg" 
                    width={1000}
                    height={150}
                />

                <div className="text-justify">
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: post?.excerpt }}></div>
                </div>

                <div className='post-content' dangerouslySetInnerHTML={{ __html: post?.content }}></div>
            </div>
        </div>
    )
}