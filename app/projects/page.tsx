import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { PageTransition } from '@/components/page-transition'

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "FashionRetail Inc.",
    category: "Web Development, UI/UX Design",
    description:
      "Complete redesign of an e-commerce platform resulting in a 40% increase in conversion rates and improved user experience.",
    image: "/placeholder.svg?height=600&width=800&text=E-commerce+Project",
  },
  {
    id: 2,
    title: "Digital Marketing Campaign",
    client: "GrowthTech Startup",
    category: "Digital Marketing, Content Strategy",
    description:
      "Comprehensive digital marketing campaign that increased organic traffic by 150% and generated 200+ qualified leads.",
    image: "/placeholder.svg?height=600&width=800&text=Marketing+Campaign",
  },
  {
    id: 3,
    title: "Mobile App Development",
    client: "HealthCare Solutions",
    category: "App Development, UI/UX Design",
    description:
      "Development of a healthcare mobile app with patient management features, secure data handling, and intuitive interface.",
    image: "/placeholder.svg?height=600&width=800&text=Mobile+App",
  },
  {
    id: 4,
    title: "Brand Identity Refresh",
    client: "Legacy Financial",
    category: "Branding, Design",
    description: "Complete brand refresh including new visual identity, website redesign, and marketing materials.",
    image: "/placeholder.svg?height=600&width=800&text=Brand+Identity",
  },
  {
    id: 5,
    title: "SaaS Platform Development",
    client: "ProductivityPro",
    category: "Web Development, Product Strategy",
    description: "Development of a SaaS platform for team productivity with custom features and integrations.",
    image: "/placeholder.svg?height=600&width=800&text=SaaS+Platform",
  },
  {
    id: 6,
    title: "SEO Optimization Campaign",
    client: "Local Business Network",
    category: "Digital Marketing, SEO",
    description:
      "SEO optimization that resulted in first-page rankings for 50+ target keywords and 200% increase in organic traffic.",
    image: "/placeholder.svg?height=600&width=800&text=SEO+Campaign",
  },
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 rounded-lg"></div>
        <div className="relative container z-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Projects</h1>
            <p className="text-xl text-muted-foreground">Explore our portfolio of successful digital solutions</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary group translate-y-2 transform"
                    >
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16 md:py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Categories</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">Browse our work by specialty</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Web Development",
              "UI/UX Design",
              "Digital Marketing",
              "E-commerce",
              "Mobile Apps",
              "Branding",
              "SEO",
              "Product Strategy",
            ].map((category, i) => (
              <Card key={i} className="bg-background">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="text-lg font-medium">{category}</h3>
                  <Link
                    href={`/projects/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-2 inline-flex items-center text-sm font-medium text-primary"
                  >
                    View Projects <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to start your project?
              </h2>
              <p className="text-primary-foreground/80">
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

