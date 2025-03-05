import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProfileComponent implements AfterViewInit {
  @ViewChildren('profileCard') profileCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const cards = this.profileCards.toArray();
    const lastIndex = cards.length - 1;

    // cards.forEach((card, index) => {
    //   const isLastCard = index === lastIndex;
    //   const element = card.nativeElement;

    //   if (isLastCard) {
    //     element.style.position = 'relative';
    //     element.style.width = '100%';
    //   }

    //   element.style.zIndex = (index + 1).toString();

    //   gsap.to(element, {
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 'top top',
    //       end: 'bottom top',
    //       pin: !isLastCard,
    //       pinSpacing: false,
    //       scrub: true,
    //     },
    //   });
    // });

    // // Allow last card to scroll away naturally when it reaches the top
    // ScrollTrigger.create({
    //   trigger: cards[lastIndex].nativeElement,
    //   start: 'top top',
    //   end: 'bottom top',
    //   pin: false, // Don't pin last card
    //   scrub: true,
    // });
  }
}
