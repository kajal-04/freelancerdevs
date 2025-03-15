import { animate, group, style, transition, trigger } from '@angular/animations';
import { NgFor, NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export const enterLeaveAnimation5 = trigger(
  'enterLeaveAnimation5', [
      transition(':enter', [
          style({ height: '0', opacity: 0, transform: 'translateY(-10%)' }), // Start small and faded
          group([
              animate('250ms ease', style({ height: '*' })), // Animate height first
              animate('300ms 100ms ease', style({ opacity: 1, transform: 'translateY(0)' })) // Animate opacity/transform with a slight delay
          ])
      ]),
      transition(':leave', [
          group([
              animate('200ms ease', style({ opacity: 0, transform: 'translateY(-10%)' })), // Animate opacity/transform first
              animate('250ms 50ms ease', style({ height: '0' })) // Animate height with a delay
          ])
      ])
]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
  animations: [enterLeaveAnimation5]
})
export class ProjectsComponent {
  showAllProjects = false;
  projects = [
    {
      name: "Disteven",
      category: "Web Application",
      description: "Disteven is your all-in-one solution for effortlessly managing groups, friends, expenses, and their resolutions.",
      technologies: ["HTML", "SCSS", "Bootstrap", "Angular", "Node.js", "MongoDB", "Express"],
      link: "https://app.disteven.com",
      borderClass: "indigo-midnight-border",
      gradientClass: "indigo-midnight-grad",
    },
    {
      name: "Cipher Bay",
      category: "Web Application",
      description: "A secure platform for encrypting and decrypting text online.",
      technologies: ["HTML", "SCSS", "Angular", "Node.js", "MongoDB", "Express"],
      link: "https://cipherbay.vercel.app/home",
      borderClass: "purple-magenta-border",
      gradientClass: "purple-magenta-grad",
    },
    {
      name: "Collatz Conjecture",
      category: "Web Application",
      description: "A visualization of the Collatz Conjecture to explore mathematical patterns.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://collatz-visual.netlify.app/",
      borderClass: "gray-emerald-border",
      gradientClass: "gray-emerald-grad",
    },
    {
      name: "Colors Expo",
      category: "Web Application",
      description: "A color palette exploration tool for designers and developers.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://find-colors.netlify.app/",
      borderClass: "green-cyan-border",
      gradientClass: "green-cyan-grad",
    },
    {
      name: "Lottery Matching App",
      category: "Web Application",
      description: "A random lottery number matcher for testing luck.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://lottery-js.netlify.app/",
      borderClass: "blue-violet-border",
      gradientClass: "blue-violet-grad",
    },
    {
      name: "Pop It",
      category: "Web Application",
      description: "A casual popping game for quick, addictive and relaxing gameplay.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://pop-game.netlify.app/",
      borderClass: "indigo-midnight-border",
      gradientClass: "indigo-midnight-grad",
    },
    {
      name: "Quiz It",
      category: "Web Application",
      description: "A fun and engaging quiz application for testing knowledge.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://quiz-jam.netlify.app/index.html",
      borderClass: "purple-magenta-border",
      gradientClass: "purple-magenta-grad",
    },
    {
      name: "Les Papilles",
      category: "Web Application",
      description: "A visually appealing food, restaurant and online ordering website.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://les-papilles.netlify.app/#m",
      borderClass: "gray-emerald-border",
      gradientClass: "gray-emerald-grad",
    },
    {
      name: "Temperature Plot Chart",
      category: "Web Application",
      description: "An interactive temperature plot chart to visualize yearly trends.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://yearly-temperature.netlify.app/",
      borderClass: "green-cyan-border",
      gradientClass: "green-cyan-grad",
    },
    {
      name: "URL Shortener",
      category: "Web Application",
      description: "A simple and efficient URL shortener for quick link management.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
      link: "https://fexy.vercel.app/",
      borderClass: "blue-violet-border",
      gradientClass: "blue-violet-grad",
    },
    {
      name: "Error Service",
      category: "Web Application",
      description: "A random word generator for creative inspiration and brainstorming.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://wrng.netlify.app/",
      borderClass: "indigo-midnight-border",
      gradientClass: "indigo-midnight-grad",
    },
    {
      name: "To Do List",
      category: "Web Application",
      description: "A simple and efficient to-do list web app for task management.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://manage-todo.netlify.app/",
      borderClass: "purple-magenta-border",
      gradientClass: "purple-magenta-grad",
    },
    {
      name: "Big Oven",
      category: "Web Application",
      description: "A recipe and meal planning app to explore and manage cooking ideas easily.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://big-oven.netlify.app/",
      borderClass: "gray-emerald-border",
      gradientClass: "gray-emerald-grad",
    }
  ];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  getInitials(name: string): string {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  toggleProjects() {
    if (this.showAllProjects) {
      this.router.navigate([], { fragment: 'projects-section' });
  
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor('projects-section');
  
        setTimeout(() => {
          this.showAllProjects = false;
        }, 400);
      }, 100);
    } else {
      this.showAllProjects = true;
    }
  }  
}
