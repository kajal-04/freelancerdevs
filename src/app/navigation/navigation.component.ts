import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from '../projects/projects.component';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactComponent } from "../contact/contact.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    ProfileComponent,
    ProjectsComponent,
    ExperienceComponent,
    HomeComponent,
    ContactComponent
]
})
export class NavigationComponent implements AfterViewInit {
  @ViewChildren('homeSection') homeSections!: QueryList<ElementRef>;
  private navbarOffset = 120;
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute("href")!;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - this.navbarOffset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      });
    });
  }

  animateSections() {
    this.homeSections.forEach((section, index) => {
      gsap.fromTo(
        section.nativeElement,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          // delay: index * 0.2,
          scrollTrigger: {
            trigger: section.nativeElement,
            start: "top 100%",
            end: "top 30%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }

  ngAfterViewInit(): void {
    this.animateSections();
    this.setupSmoothScroll();
  }
}
