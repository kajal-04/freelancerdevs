"use client";

import { useEffect, useState } from "react";
import { PageTransition } from "@/components/page-transition";
import AnimatedGradientText from "@/components/animated-gradient-text";
import Image from "next/image"
import Link from "next/link";
import { ArrowUpRightIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export default function BlogsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = `
    {
        publication(host: "blog.freelancerdevs.com") {
            posts(first: 5) {
                edges {
                    node {
                        id
                        title
                        brief
                        slug
                        coverImage {url}
                        reactionCount
                        publishedAt
                        responseCount
                        views
                        readTimeInMinutes
                    }
                }
            }
        }
    }`


    useEffect(() => {
        // Fetch posts from the API
        fetch('https://gql.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: '498a2dbc-9c86-410f-8a87-baa9bafdec48' // Add this to your .env file
            },
            body: JSON.stringify({ query: query })
        }).then((response) => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();

        }).then((data) => {

            const posts = data.data.publication.posts.edges.map(edge => edge.node);
            // Sort posts by publishedAt date in descending order
            posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
            // Set the posts state
            setPosts(posts);
            // Set loading to false
            setLoading(false);

        }).catch((error) => {

            console.error('Error fetching posts:', error);
            setLoading(false);

        });
        // Cleanup function to avoid memory leaks
        return () => {
            setPosts([]);
            setLoading(true);
        };
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`; // "22 May, 2025"
    }

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="container mx-auto relative py-6 md:py-8 px-4 sm:px-6 lg:px-8">
                {/* <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div> */}
                <div className="container relative z-10">
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                            Blogs
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Our <AnimatedGradientText text="Blogs" />
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Informative blogs to keep you in the loop.
                        </p>
                    </div>
                </div>
                <div className="container py-12 mx-auto px-4 sm:px-6 lg:px-8">
                    {
                        loading ? 
                        (
                            <p className="flex justify-center text-muted-foreground h-32">Loading blogs...</p>
                        ) : 
                        (
                            posts.length === 0 ? (
                                <div className="p-6 rounded-lg bg-gray-800">
                                    <Image
                                        src="/empty.png"
                                        width={60}
                                        height={60}
                                        alt="No blogs found"
                                        loading="eager"
                                        className="rounded-lg mx-auto object-cover"
                                    />
                                    <p className="text-center text-muted-foreground mt-2">No blogs found.</p>
                                </div>
                            ) : (
                                <div>

                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold">Latest Blogs</h2>
                                        <Link href="https://blog.freelancerdevs.com" target="_blank" className="text-sm text-primary hover:underline">
                                            View All
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <div key={post.slug} className="rounded-lg bg-background border p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <div className='flex justify-center items-center h-32 w-full overflow-hidden rounded-lg bg-gray-800'>
                                                <Image
                                                    src="/blog.png"
                                                    width={60}
                                                    height={60}
                                                    alt={post.title}
                                                    loading="eager"
                                                    className="rounded-lg mx-auto object-cover"
                                                />
                                            </div>
                                            <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
                                            <div className="flex items-center justify-between gap-2 mt-2 flex-wrap">
                                                <div className="flex mt-2 space-x-4 items-center text-muted-foreground">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <p className="text-sm flex items-center gap-1">{post.views} <EyeIcon className="h-4 w-4" /></p>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="top">
                                                                Views
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <p className="text-sm flex items-center gap-1">{post.reactionCount}  <HeartIcon className="h-4 w-4" /> </p>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="top">
                                                                Likes
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <p className="text-sm flex items-center gap-1">{post.responseCount} <MessageCircleIcon className="h-4 w-4" /> </p>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="top">
                                                                Comments
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                                <p className="mt-2 text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
                                            </div>
                                            {/* Uncomment the line below if you want to show the brief */}
                                            {/* <p className="mt-2 text-slate-600">{post.brief}</p> */}
                                            <Link href={`https://blog.freelancerdevs.com/${post.slug}`} target="_blank" className="mt-4 inline-block text-primary flex items-center gap-1">
                                                <span className="text-sm font-medium">{post.readTimeInMinutes} min read</span>
                                                <ArrowUpRightIcon className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </section>
        </PageTransition>
    )
}