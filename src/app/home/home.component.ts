import { Component, ElementRef, Renderer2, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements OnInit, AfterViewInit  {

  private bubblePositions = [
    { left: "10%", top: "20%" },
    { left: "30%", top: "50%" },
    { left: "50%", top: "10%" },
    { left: "70%", top: "40%" },
    { left: "90%", top: "30%" },
    { left: "20%", top: "80%" },
    { left: "40%", top: "60%" },
    { left: "60%", top: "90%" },
    { left: "80%", top: "70%" },
    { left: "50%", top: "50%" },
  ];

  constructor(private el: ElementRef,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createBubbles();
  }

  createBubbles() {
    const bubbleContainer = this.el.nativeElement.querySelector('.bubble-container');

    this.bubblePositions.forEach((position, index) => {
      const bubble = this.renderer.createElement('div');
      this.renderer.addClass(bubble, 'bubble');

      const size = index % 2 === 0 ? Math.random() * 80 + 40 : Math.random() * 50 + 20;

      this.renderer.setStyle(bubble, 'width', `${size}px`);
      this.renderer.setStyle(bubble, 'height', `${size}px`);
      this.renderer.setStyle(bubble, 'left', position.left);
      this.renderer.setStyle(bubble, 'top', position.top);

      this.renderer.appendChild(bubbleContainer, bubble);

      gsap.to(bubble, {
        x: Math.random() * 120 - 60,
        y: Math.random() * 120 - 60,
        scale: Math.random() * 0.5 + 0.8,
        opacity: Math.random() * 0.6 + 0.4,
        duration: index % 2 === 0 ? Math.random() * 3 + 2 : Math.random() * 2 + 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }

  animateElements() {
    const greeting = this.el.nativeElement.querySelector('.greeting');
    const heading = this.el.nativeElement.querySelector('.home-heading');
    const ctaSection = this.el.nativeElement.querySelector('.home-hire');

    gsap.from([greeting, heading], {
      y: -30, 
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    gsap.from(ctaSection, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.8,
    });
  }

  ngAfterViewInit(): void {
    this.animateElements();
  }
}
