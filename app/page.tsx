"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import GlowCard from "@/components/glow-card"
import AnimatedGradientText from "@/components/animated-gradient-text"
import ParallaxSection from "@/components/parallax-section"
import { ArrowRight, Code, Layout, LineChart, MessageSquare, Zap, ArrowUpRight } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="container mx-auto relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 from-primary/5 to-background"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <motion.div style={{ opacity, scale }} className="container relative z-10 py-20">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-4xl"
            >
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                Redefining Digital Experiences
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Transforming Ideas into <AnimatedGradientText text="Digital Excellence" />
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We create innovative digital solutions that help businesses grow, engage customers, and achieve their
                goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="group relative overflow-hidden text-white">
                <Link href="/contact">
                  <span className="relative z-10">Get Quote</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="/projects" className="flex items-center gap-2">
                  View Our Work
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mt-8 w-full max-w-5xl"
            >
              <div className="absolute -inset-0.5 rounded-xl from-primary to-primary-foreground opacity-20 blur-xl"></div>
              <div className="absolute -inset-0.5 rounded-xl from-primary to-primary-foreground opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden flex items-center content-center mt-8">
                <Image
                  src="/hero-svg.svg"
                  width={500}
                  height={350}
                  alt="Digital solutions showcase"
                  className="m-auto"
                  priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">Latest Project: TechFusion Platform</h3>
                    <p className="text-white/80">A revolutionary SaaS solution for enterprise management</p>
                  </div>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href="/projects/techfusion">View Case Study</Link>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-primary" />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto  py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Comprehensive <AnimatedGradientText text="Digital Solutions" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Tailored to your business needs with cutting-edge technology
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Layout className="h-10 w-10" />,
                title: "Web Development",
                description: "Custom websites and web applications built with the latest technologies",
                link: "/services/web-development",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "UI/UX Design",
                description: "User-centered design that creates engaging and intuitive experiences",
                link: "/services/ui-ux-design",
              },
              {
                icon: <LineChart className="h-10 w-10" />,
                title: "Digital Marketing",
                description: "Strategic marketing solutions to grow your online presence",
                link: "/services/digital-marketing",
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Product Strategy",
                description: "Comprehensive product planning and development roadmaps",
                link: "/services/product-strategy",
              },
            ].map((service, i) => (
              <GlowCard key={i}>
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="flex-grow text-muted-foreground">{service.description}</p>
                  {/* <Link href={service.link} className="inline-flex items-center text-sm font-medium text-primary group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link> */}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <ParallaxSection className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Featured <AnimatedGradientText text="Projects" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Explore some of our recent work and success stories
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Disteven",
                category: "Disteven is your all-in-one solution for effortlessly managing groups, friends, expenses, and their resolutions.",
                image: "/disteven.png",
              },
              {
                id: 2,
                title: "Cipher Bay",
                category: "A secure platform for encrypting and decrypting text online.",
                image: "/cipher-bay.png",
              },
              {
                id: 3,
                title: "URL Shortener",
                category: "A simple and efficient URL shortener for quick link management.",
                image: "url-shortner.png",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-[0.15] transition-all duration-300 z-0"></div>
                <div className="relative rounded-xl overflow-hidden z-10 hover:border">
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 opacity-0 transform translate-y-10 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {project.category}
                    </p>
                    <Link
                      href={`/projects/project-${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary group translate-y-2 transform"
                    >
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <section className="container mx-auto py-24 md:py-32 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Client Success
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Our <AnimatedGradientText text="Clients Say" />
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Hear from businesses that have transformed their digital presence with our help
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                quote:
                  "Working with FreelancerDevs transformed our online presence. Their team delivered a website that perfectly captures our brand and has significantly increased our conversion rates.",
              },
              {
                name: "Michael Chen",
                role: "Marketing Director, GrowthCorp",
                quote:
                  "The digital marketing strategy developed by FreelancerDevs helped us reach new audiences and grow our customer base by 40% in just six months.",
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, InnovateCo",
                quote:
                  "Their product strategy expertise was invaluable in helping us refine our vision and create a roadmap that aligned with our business goals. Highly recommended!",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <GlowCard>
                  <div className="relative">
                    <MessageSquare className="h-8 w-8 text-primary/20 absolute top-0 right-0" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Driving <AnimatedGradientText text="Results" /> That Matter
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: 5, suffix: "+", label: "Years of Experience" },
              { number: 15, suffix: "+", label: "Projects Completed" },
              { number: 10, suffix: "+", label: "Team Members" },
              { number: 95, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <GlowCard>
                  <div className="flex flex-col items-center p-6 text-center">
                    <div className="mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="container mx-auto py-24 md:py-32 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-[0.15]"></div>
            <div className="absolute inset-0 bg-[url('/images/cta-background.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
              <div className="mx-auto max-w-3xl space-y-8 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to transform your digital presence?
                </h2>
                <p className="text-white/80 text-lg">
                  Let's discuss how we can help your business grow with our comprehensive digital solutions.
                </p>
                <Button size="lg" variant="secondary" asChild className="group mr-4">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us Today
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="https://calendly.com/contact-freelancerdevs/30min" target="_blank" className="flex items-center gap-2">
                    Schedule a call!
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

