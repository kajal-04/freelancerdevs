"use client";

import { useEffect, useState } from "react";
import { PageTransition } from "@/components/page-transition";
import AnimatedGradientText from "@/components/animated-gradient-text";
import Image from "next/image"
import Link from "next/link";
import { ArrowUpRightIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react"


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
            setPosts(posts);
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


    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="container mx-auto relative py-6 md:py-8 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div>
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
            </section>
            <section className="container mx-auto pb-16 md:py-6 container px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {
                        loading ? (<p className="center">Loading blogs...</p>) : (
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
                                                <p className="text-sm flex items-center gap-1">{post.views} <EyeIcon className="h-4 w-4" /></p>
                                                <p className="text-sm flex items-center gap-1">{post.reactionCount}  <HeartIcon className="h-4 w-4" /> </p>
                                                <p className="text-sm flex items-center gap-1">{post.responseCount} <MessageCircleIcon className="h-4 w-4" /> </p>
                                            </div>
                                            <p className="mt-2 text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</p>
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
                        )
                    }
                </div>
            </section>
        </PageTransition>
    )
}