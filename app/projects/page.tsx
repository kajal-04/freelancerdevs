import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { PageTransition } from '@/components/page-transition'
import AnimatedGradientText from "@/components/animated-gradient-text"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Disteven",
    client: "",
    category: "Web Development, UI/UX Design",
    description:
      "Disteven is your all-in-one solution for effortlessly managing groups, friends, expenses, and their resolutions.",
    image: "/disteven.PNG",
    demoUrl: "https://app.disteven.com/"
  },
  {
    id: 2,
    title: "Cipher Bay",
    client: "GrowthTech Startup",
    // category: "Digital Marketing, Content Strategy",
    category: "Web Development, UI/UX Design",
    description:
      "A secure platform for encrypting and decrypting text online.",
    image: "/cipher-bay.PNG",
    demoUrl: "https://cipherbay.vercel.app/home"
  },
  {
    id: 3,
    title: "URL Shortener",
    client: "HealthCare Solutions",
    category: "Web Development, UI/UX Design",
    description:
      "A simple and efficient URL shortener for quick link management.",
    image: "/url-shortner.PNG",
    demoUrl: "https://fexy.vercel.app/"
  },
  {
    id: 4,
    title: "Colors Expo",
    client: "Legacy Financial",
    // category: "Branding, Design",
    category: "Web Application",
    description: "A color palette exploration tool for designers and developers.",
    image: "/colors-expo.PNG",
    demoUrl: "https://find-colors.netlify.app/"
  },
  {
    id: 5,
    title: "Lottery Matching App",
    client: "ProductivityPro",
    category: "Web Development, Product Strategy",
    description: "A random lottery number matcher for testing luck.",
    image: "/lottery.PNG",
    demoUrl: "https://lottery-js.netlify.app/"
  },
  {
    id: 5,
    title: "Collatz Conjecture",
    client: "ProductivityPro",
    category: "Web Development, Product Strategy",
    description: "A visualization of the Collatz Conjecture to explore mathematical patterns.",
    image: "/collatz.PNG",
    demoUrl: "https://collatz-visual.netlify.app/"
  },
  {
    id: 6,
    title: "Pop It",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "A casual popping game for quick, addictive and relaxing gameplay.",
    image: "/pop-game.PNG",
    demoUrl: "https://pop-game.netlify.app/"
  },
  {
    id: 6,
    title: "Quiz It",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "A fun and engaging quiz application for testing knowledge.",
    image: "/quiz-it.PNG",
    demoUrl: "https://quiz-jam.netlify.app/index.html"
  },
  {
    id: 6,
    title: "Les Papilles",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "A visually appealing food, restaurant and online ordering website.",
    image: "/les-papilles.PNG",
    demoUrl: "https://les-papilles.netlify.app/#m"
  },
  {
    id: 6,
    title: "Temperature Plot Chart",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "An interactive temperature plot chart to visualize yearly trends.",
    image: "/temperature-plot-chart.PNG",
    demoUrl: "https://yearly-temperature.netlify.app/"
  },
  {
    id: 6,
    title: "Error Service",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "An application designed to efficiently handle and manage website errors.",
    image: "/error-service.PNG",
    demoUrl: "https://wrng.netlify.app/"
  },
  {
    id: 6,
    title: "To Do List",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "A simple and efficient to-do list web app for task management.",
    image: "/to-do-app.PNG",
    demoUrl: "https://manage-todo.netlify.app/"
  },
  {
    id: 6,
    title: "Big Oven",
    client: "Local Business Network",
    // category: "Digital Marketing, SEO",
    category: "Web Application",
    description:
      "A recipe and meal planning app to explore and manage cooking ideas easily.",
    image: "/big-oven.PNG",
    demoUrl: "https://big-oven.netlify.app/"
  }
]

const categories = [
  {
    name: "Web Development",
    description: "We build fast, scalable, and modern websites tailored to your business needs."
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with sleek, user-friendly interfaces."
  },
  {
    name: "Digital Marketing",
    description: "Data-driven strategies to enhance brand visibility, engagement, and conversions."
  },
  {
    name: "E-commerce",
    description: "Custom online stores optimized for seamless shopping experiences and high conversions."
  },
  {
    name: "Branding",
    description: "Crafting strong brand identities with unique logos, visuals, and messaging."
  },
  {
    name: "SEO",
    description: "Optimizing websites for higher search rankings, organic traffic, and better visibility."
  },
  {
    name: "Product Strategy",
    description: "Defining clear roadmaps to align business goals with innovative digital solutions."
  },
  {
    name: "Automation",
    description: "Streamlining workflows with smart solutions to enhance efficiency, reduce costs, and improve accuracy."
  }
]
export default function ProjectsPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="container mx-auto relative py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div>
        <div className="relative container z-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our <AnimatedGradientText text="Projects" />
            </h1>
            <p className="text-xl text-muted-foreground">Explore our portfolio of successful digital solutions</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {/* <p className="text-sm text-muted-foreground">Client: {project.client}</p> */}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <Link
                      target="_blank"
                      href={`${project.demoUrl}`}
                      className="inline-flex items-center text-sm font-medium text-primary group translate-y-2 transform"
                    >
                      Live Demo <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto bg-muted py-16 md:py-16 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Areas</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">We excel in web apps, UI/UX design, branding, and custom software, delivering high-quality, tailored solutions.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, i) => ( 
              <Card key={i} className="bg-background">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-muted-foreground hover:text-primary text-sm">{category.description}</p>
                {/* <Link
                  href={`/projects/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-2 inline-flex items-center text-sm font-medium text-primary"
                >
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary p-8 bg-gradient-to-r from-primary to-primary-foreground opacity-90 md:p-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to start your project?
              </h2>
              <p className="text-white/80">
                Let's discuss how we can help your business grow with our comprehensive digital solutions.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

