"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Users, ArrowRight } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import GlowCard from "@/components/glow-card"
import { PageTransition } from '@/components/page-transition'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })
  
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="container mx-auto relative py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div>
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                About Us
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About <AnimatedGradientText text="FreelancerDevs" />
              </h1>
              <p className="text-xl text-muted-foreground">
                We're a team of passionate digital experts committed to delivering exceptional solutions that drive
                business growth.
              </p>
              <Button asChild className="group relative overflow-hidden">
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                </Link>
              </Button>
            </div>
            <div className="relative">
              {/* <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.05] blur-xl"></div> */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.025]"></div>
              <div className="relative rounded-xl overflow-hidden p-10">
                <motion.div style={{ opacity, scale }}>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-6 max-w-4xl"
                >
                  <Image
                    src="/accent-team.svg"
                    width={600}
                    height={400}
                    alt="FreelancerDevs team"
                    className="rounded-lg mx-auto"
                  />
                </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our <AnimatedGradientText text="Story" />
            </h2>
            <p className="text-muted-foreground">
              Founded in 2015, FreelancerDevs began with a simple mission: to help businesses succeed in the digital
              world. What started as a small team of three passionate developers has grown into a full-service digital
              agency with over 10 experts across web development, design, marketing, and strategy.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've partnered with a number of businesses,
              helping them transform their digital presence and achieve remarkable growth. Our client-first approach and
              commitment to excellence have made us a trusted partner for businesses looking to thrive in the digital
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our <AnimatedGradientText text="Values" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "We're committed to delivering the highest quality work in everything we do, exceeding expectations and setting new standards.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, both within our team and with our clients, to create the best possible solutions.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description:
                  "We constantly explore new technologies and approaches to solve complex problems and drive digital transformation.",
              },
            ].map((value, i) => (
              <GlowCard key={i}>
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Our People
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Meet Our <AnimatedGradientText text="Team" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Syed Ali", role: "Full Stack Engineer", image: "/images/team-member-1.png" },
              { name: "Kajal Kumari", role: "Frontend Engineer & UI/UX Specialist", image: "/images/team-member-2.png" },
              { name: "David Chen", role: "Lead Developer", image: "/images/team-member-3.png" },
              { name: "Sarah Kim", role: "Marketing Strategist", image: "/images/team-member-4.png" },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></div>
                <div className="relative rounded-xl overflow-hidden z-10">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "5+", label: "Years of Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "10+", label: "Team Members" },
              { number: "95%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <GlowCard key={i}>
                <div className="flex flex-col items-center p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/images/cta-background.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to work with us?
                </h2>
                <p className="text-white/80">
                  Let's discuss how we can help your business grow with our comprehensive digital solutions.
                </p>
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

