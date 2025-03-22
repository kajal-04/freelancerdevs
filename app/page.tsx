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
                title: "FinTech Dashboard",
                category: "Web Development, UI/UX Design",
                image: "/images/project-1.png",
              },
              {
                id: 2,
                title: "E-Commerce Platform",
                category: "Web Development, Digital Marketing",
                image: "/images/project-2.png",
              },
              {
                id: 3,
                title: "AI Analytics Tool",
                category: "Product Strategy, UI/UX Design",
                image: "/images/project-3.png",
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
                    src="data:image/jpeg;base64,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"
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
              { number: 8, suffix: "+", label: "Years of Experience" },
              { number: 200, suffix: "+", label: "Projects Completed" },
              { number: 50, suffix: "+", label: "Team Members" },
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/images/cta-background.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
              <div className="mx-auto max-w-3xl space-y-8 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to transform your digital presence?
                </h2>
                <p className="text-white/80 text-lg">
                  Let's discuss how we can help your business grow with our comprehensive digital solutions.
                </p>
                <Button size="lg" variant="secondary" asChild className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us Today
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

