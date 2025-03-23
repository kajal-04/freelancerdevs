"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import GlowCard from "@/components/glow-card"
import { PageTransition } from '@/components/page-transition'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ServicesPage() {
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
      <section className="container mx-auto relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm">
              What We Offer
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our <AnimatedGradientText text="Services" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {/* Web Development */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Web Development
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Custom Web <AnimatedGradientText text="Solutions" />
                  </h2>
                  <p className="text-muted-foreground">
                    We build responsive, high-performance websites and web applications that deliver exceptional user
                    experiences. Our development team uses the latest technologies to create scalable, secure, and
                    feature-rich digital solutions.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "Custom website development",
                      "Web application development",
                      "E-commerce solutions",
                      "Content management systems",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="group relative overflow-hidden text-white">
                      <Link href="/contact">
                        <span className="relative z-10">Get Quote</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-xl"></div> */}
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.025]"></div>
                  <div className="relative rounded-xl overflow-hidden p-10">
                    <motion.div style={{ scale }}>

                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6 max-w-4xl"
                      >
                        <Image
                          src="/analyze-data.svg"
                          width={400}
                          height={200}
                          alt="FreelancerDevs team"
                          loading="lazy"
                          className="rounded-lg mx-auto"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="relative">
                  {/* <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-xl"></div> */}
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.025]"></div>
                  <div className="relative rounded-xl overflow-hidden p-10">
                    <motion.div style={{ scale }}>

                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6 max-w-4xl"
                      >
                        <Image
                          src="/designer-desk.svg"
                          width={400}
                          height={200}
                          alt="FreelancerDevs team"
                          className="rounded-lg mx-auto"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    UI/UX Design
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    User-Centered <AnimatedGradientText text="Design" />
                  </h2>
                  <p className="text-muted-foreground">
                    We create intuitive, engaging user experiences that delight your customers and drive conversions.
                    Our design process focuses on understanding user needs and business goals to deliver impactful
                    solutions.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "User research and testing",
                      "Wireframing and prototyping",
                      "Visual design and branding",
                      "Interaction design",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="group relative overflow-hidden">
                      <Link href="/contact">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Digital Marketing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Growth-Driven <AnimatedGradientText text="Marketing" />
                  </h2>
                  <p className="text-muted-foreground">
                    We develop comprehensive digital marketing strategies that increase your online visibility, drive
                    qualified traffic, and convert visitors into customers. Our data-driven approach ensures measurable
                    results.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "Search engine optimization (SEO)",
                      "Pay-per-click advertising (PPC)",
                      "Social media marketing",
                      "Content marketing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="group relative overflow-hidden">
                      <Link href="/contact">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-xl"></div> */}
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.025]"></div>
                  <div className="relative rounded-xl overflow-hidden p-10">
                    <motion.div style={{ scale }}>

                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6 max-w-4xl"
                      >
                        <Image
                          src="/social-media.svg"
                          width={400}
                          height={200}
                          alt="FreelancerDevs team"
                          className="rounded-lg mx-auto"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Strategy */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="relative">
                  {/* <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-xl"></div> */}
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-[0.025]"></div>
                  <div className="relative rounded-xl overflow-hidden p-10">
                    <motion.div style={{ scale }}>

                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6 max-w-4xl"
                      >
                        <Image
                          src="/business-presentation.svg"
                          width={400}
                          height={200}
                          alt="FreelancerDevs team"
                          loading="lazy"
                          className="rounded-lg mx-auto"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Product Strategy
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Strategic Product <AnimatedGradientText text="Development" />
                  </h2>
                  <p className="text-muted-foreground">
                    We help you define and execute product strategies that align with your business goals and meet
                    market needs. Our comprehensive approach covers everything from concept to launch and beyond.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      "Market and competitor analysis",
                      "Product roadmapping",
                      "MVP development",
                      "Product growth strategies",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="group relative overflow-hidden">
                      <Link href="/contact">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              How We Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our <AnimatedGradientText text="Process" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              How we work with you to deliver exceptional results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "01", title: "Discovery", description: "We learn about your business, goals, and challenges." },
              {
                number: "02",
                title: "Strategy",
                description: "We develop a tailored plan to achieve your objectives.",
              },
              { number: "03", title: "Execution", description: "We implement the strategy with precision and care." },
              {
                number: "04",
                title: "Optimization",
                description: "We continuously improve based on data and feedback.",
              },
            ].map((step, i) => (
              <GlowCard key={i}>
                <div className="relative p-6">
                  <span className="absolute top-6 right-6 text-3xl font-bold text-primary/20">{step.number}</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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

            <div className="relative z-10 p-8 md:p-12">
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to transform your digital presence?
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

