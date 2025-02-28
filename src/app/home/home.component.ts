import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ProfileComponent } from '../profile/profile.component';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('animationCanvas', { static: true }) animationCanvas!: ElementRef<SVGSVGElement>;

  private icons = [
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
    'https://angular.io/assets/images/logos/angular/shield-large.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
    'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
    'https://syedali310.github.io/mock-db/portfolio/git-icon-logo-svgrepo-com.svg'
  ];

  private centerX = 600;
  private centerY = 600;
  private radius = 300;
  private iconSize = 50;
  private movementRadius = this.radius * 0.7;
  private initialPositions: { x: number; y: number }[] = [];

  ngAfterViewInit() {
    const svgNamespace = 'http://www.w3.org/2000/svg';

    this.icons.forEach((iconUrl, index) => {
      const { x, y } = this.getRandomPosition();
      this.initialPositions[index] = { x, y };

      const imageElement = document.createElementNS(svgNamespace, 'image');
      imageElement.setAttributeNS(null, 'href', iconUrl);
      imageElement.setAttributeNS(null, 'width', this.iconSize.toString());
      imageElement.setAttributeNS(null, 'height', this.iconSize.toString());
      imageElement.setAttributeNS(null, 'x', x.toString());
      imageElement.setAttributeNS(null, 'y', y.toString());
      this.animationCanvas.nativeElement.appendChild(imageElement);

      this.floatIcon(imageElement, index);
    });

    this.animationCanvas.nativeElement.addEventListener('mousemove', (event) =>
      this.moveIconsAwayFromCursor(event)
    );
  }

  private getRandomPosition(): { x: number; y: number } {
    let x: number, y: number, overlapping;
    const maxAttempts = 100; // To prevent infinite loops
    let attempts = 0;
  
    do {
      let angle = Math.random() * 2 * Math.PI;
      let distance = Math.random() * (this.movementRadius - this.iconSize);
      x = this.centerX + distance * Math.cos(angle) - this.iconSize / 2;
      y = this.centerY + distance * Math.sin(angle) - this.iconSize / 2;
  
      overlapping = this.initialPositions.some(pos => {
        const dx = pos.x - x;
        const dy = pos.y - y;
        const minDistance = this.iconSize * 1.2; // Ensures icons don't overlap
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
      });
  
      attempts++;
    } while (overlapping && attempts < maxAttempts);
  
    return { x, y };
  }
  

  private floatIcon(element: SVGImageElement, index: number) {
    const moveIcon = () => {
      const baseX = this.initialPositions[index].x;
      const baseY = this.initialPositions[index].y;
      const maxMove = 40;

      const x = baseX + (Math.random() * 2 - 1) * maxMove;
      const y = baseY + (Math.random() * 2 - 1) * maxMove;

      gsap.to(element, {
        x: x - baseX,
        y: y - baseY,
        duration: 3 + Math.random() * 2,
        ease: 'power1.inOut',
        onComplete: moveIcon
      });
    };

    moveIcon();
  }

  private moveIconsAwayFromCursor(event: MouseEvent) {
    const svgElement = this.animationCanvas.nativeElement as SVGSVGElement;
    const point = svgElement.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const cursorPoint = point.matrixTransform(svgElement.getScreenCTM()?.inverse());

    const cursorX = cursorPoint.x;
    const cursorY = cursorPoint.y;

    this.animationCanvas.nativeElement.querySelectorAll('image').forEach((icon, index) => {
      const iconX = parseFloat(icon.getAttribute('x') || '0') + this.iconSize / 2;
      const iconY = parseFloat(icon.getAttribute('y') || '0') + this.iconSize / 2;
      const dx = iconX - cursorX;
      const dy = iconY - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        let moveDistance = Math.min(80, 100 - distance); // Smooth push effect

        let newX = iconX + Math.cos(angle) * moveDistance;
        let newY = iconY + Math.sin(angle) * moveDistance;

        const newDistanceFromCenter = Math.sqrt((newX - this.centerX) ** 2 + (newY - this.centerY) ** 2);
        if (newDistanceFromCenter > this.movementRadius - this.iconSize / 2) {
          newX = this.centerX + (Math.cos(angle) * (this.movementRadius - this.iconSize / 2));
          newY = this.centerY + (Math.sin(angle) * (this.movementRadius - this.iconSize / 2));
        }

        gsap.to(icon, {
          x: newX - iconX,
          y: newY - iconY,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  }
}
