import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                FreelancerDevs
              </h3>
              <p className="text-sm text-muted-foreground">
                Providing innovative digital solutions for businesses of all sizes since 2015.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    <span className="absolute -inset-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/product-strategy"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Product Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  123 Business Avenue
                  <br />
                  Tech District
                  <br />
                  New York, NY 10001
                </li>
                <li>
                  <Link
                    href="mailto:info@FreelancerDevs.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    info@FreelancerDevs.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border/40 pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} FreelancerDevs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

