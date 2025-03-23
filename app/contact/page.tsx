"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"
import { PageTransition } from '@/components/page-transition'
import AnimatedGradientText from "@/components/animated-gradient-text"

export default function ContactPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/codes.json")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error loading countries:", err));
  }, []);

  useEffect(() => {
    console.log("Countries loaded:", countries);
  }, [countries]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
      console.log("Form submitted:", formData);
    }, 1500)
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="container mx-auto relative py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 from-primary/5 to-background z-0 rounded-lg"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Contact <AnimatedGradientText text="Us" />
            </h1>
            <p className="text-xl text-muted-foreground">Get in touch with our team to discuss your project</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="rounded-lg bg-primary/10 p-6 text-center">
                    <h3 className="mb-2 text-xl font-bold text-primary">Thank you for contacting us!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number {countries.length > 0 && countries['currency'][0].shortName}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (234) 567-890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={handleSelectChange}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="product-strategy">Product Strategy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex space-x-4 items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Information</h2>
                  <p className="mt-2 text-muted-foreground">Reach out to us directly using the information below.</p>
                </div>
                <Button size="sm" variant="default" asChild className="group">
                  <Link href="https://calendly.com/contact-freelancerdevs/30min" target="_blank" className="text-white">
                    Schedule a call!
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <Link href="mailto:contact@freelancerdevs.com" className="text-muted-foreground hover:text-primary text-sm">
                        contact@freelancerdevs.com
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <Link href="tel:+918295309717" className="text-muted-foreground hover:text-primary text-sm">
                        +91 8295309717
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our location</h3>
                      <p className="text-muted-foreground text-sm">
                        Hyderabad, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* <div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">Find answers to common questions about working with us</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: "What is your typical process for new projects?",
                  answer:
                    "Our process typically includes discovery, planning, design, development, testing, and launch phases. We start with understanding your business goals and requirements, then create a tailored plan to achieve them.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you offer maintenance and support after launch?",
                  answer:
                    "Yes, we offer ongoing maintenance and support packages to ensure your digital solution continues to perform optimally. These can include regular updates, security patches, performance monitoring, and content updates.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We offer both project-based and retainer pricing models. Project-based pricing is determined by scope, complexity, and timeline. We provide detailed proposals with transparent pricing before beginning any work.",
                },
                {
                  question: "Can you work with our existing team?",
                  answer:
                    "We're experienced in collaborating with in-house teams and can adapt our process to complement your existing workflows and resources.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16 md:py-24 container px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

