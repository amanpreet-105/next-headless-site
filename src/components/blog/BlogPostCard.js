import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }) {
    console.log('post',post);
    
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric',month: 'short',day: '2-digit',}).replace(' ', '').replace(',', ',');
    return (
        <div className="bg-white shadow-lg group border border-gray-200 hover:border-primary transition duration-300">
            <div className="w-full h-80 overflow-hidden">
            <Image
                className="w-full h-full object-cover transition-all group-hover:duration-300 group-hover:scale-110"
                src={post?.featuredImage?.node?.sourceUrl ?? null }
                alt={post?.featuredImage?.node?.altText ?? post?.title }
                width={500}
                height={300}
            />
            </div>
            <div className="p-5">
            <span className="inline-block text-base py-1.5 px-4 bg-gray-100 border-l-4 my-3 group-hover:border-l-primary">
                { formattedDate } | { post?.author?.node?.name }
            </span>
            <h3 className="font-crimson 2xl:text-2xl md:text-xl font-semibold line-clamp-2">
                { post?.title }
            </h3>
            <p className="mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: post?.excerpt }}>
            </p>
            <Link
                href={`blog/${post?.slug} `}
                className="underline inline-block font-semibold mt-4 group-hover:text-primary"
            >
                Read More
            </Link>
            </div>
        </div>
    );
}