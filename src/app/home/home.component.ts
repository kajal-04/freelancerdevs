import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";
import { ProfileComponent } from '../profile/profile.component';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, ProfileComponent, ProjectsComponent],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('animationCanvas', { static: true }) animationCanvas!: ElementRef<HTMLDivElement>;

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

  private centerX = 0;
  private centerY = 0;
  private radius = 0;
  private iconSize = 50;
  private movementRadius = 0;
  private initialPositions: { x: number; y: number }[] = [];

  ngAfterViewInit() {
    this.updateSizes();
    this.createIcons();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSizes();
    this.repositionIcons();
  }

  private updateSizes() {
    const container = this.animationCanvas.nativeElement;
    const { width, height } = container.getBoundingClientRect();

    this.centerX = width / 2;
    this.centerY = height / 2;
    this.radius = Math.min(width, height) / 2 - this.iconSize;
    this.movementRadius = this.radius;
  }

  private createIcons() {
    const container = this.animationCanvas.nativeElement;
    container.innerHTML = ''; // Clear previous icons

    this.icons.forEach((iconUrl, index) => {
      const { x, y } = this.getRandomPosition();
      this.initialPositions[index] = { x, y };

      const imageElement = document.createElement('img');
      imageElement.src = iconUrl;
      imageElement.style.width = `${this.iconSize}px`;
      imageElement.style.height = `${this.iconSize}px`;
      imageElement.style.position = 'absolute';
      imageElement.style.left = `${x}px`;
      imageElement.style.top = `${y}px`;
      imageElement.style.transition = 'transform 0.4s ease-out';

      container.appendChild(imageElement);
      this.floatIcon(imageElement, index);
    });

    container.addEventListener('mousemove', (event) => this.moveIconsAwayFromCursor(event));
  }

  private getRandomPosition(): { x: number; y: number } {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Helps distribute icons evenly
    const index = this.initialPositions.length;
    
    let angle = index * goldenAngle; // Unique angle for each icon
    let minDistance = this.movementRadius * 0.6; // Avoids icons clustering near center
    let distance = minDistance + Math.random() * (this.movementRadius - minDistance);
  
    let x = this.centerX + distance * Math.cos(angle) - this.iconSize / 2;
    let y = this.centerY + distance * Math.sin(angle) - this.iconSize / 2;
  
    return { x, y };
  }
  
  private floatIcon(element: HTMLImageElement, index: number) {
    const moveIcon = () => {
      let angle = Math.random() * Math.PI * 2; // Random direction
      let distance = this.movementRadius * (0.7 + Math.random() * 0.3); // Move further within allowed area
  
      let newX = this.centerX + distance * Math.cos(angle);
      let newY = this.centerY + distance * Math.sin(angle);
  
      gsap.to(element, {
        x: newX - parseFloat(element.style.left),
        y: newY - parseFloat(element.style.top),
        duration: 2.5 + Math.random() * 2, // Slightly longer animations for smoother movement
        ease: 'power2.inOut',
        onComplete: moveIcon,
      });
    };
  
    moveIcon();
  }

  private moveIconsAwayFromCursor(event: MouseEvent) {
    const container = this.animationCanvas.nativeElement;
    const rect = container.getBoundingClientRect();
    const cursorX = event.clientX - rect.left;
    const cursorY = event.clientY - rect.top;
  
    container.querySelectorAll('img').forEach((icon) => {
      const iconX = parseFloat(icon.style.left) + this.iconSize / 2;
      const iconY = parseFloat(icon.style.top) + this.iconSize / 2;
      const dx = iconX - cursorX;
      const dy = iconY - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 100) { // Move only if cursor is near
        const angle = Math.atan2(dy, dx);
        const moveDistance = Math.min(80, 100 - distance); // Push away based on proximity
  
        let newX = iconX + Math.cos(angle) * moveDistance;
        let newY = iconY + Math.sin(angle) * moveDistance;
  
        // Ensure the new position stays within the circular boundary
        const distanceFromCenter = Math.sqrt((newX - this.centerX) ** 2 + (newY - this.centerY) ** 2);
        if (distanceFromCenter > this.movementRadius - this.iconSize / 2) {
          newX = this.centerX + (Math.cos(angle) * (this.movementRadius - this.iconSize / 2));
          newY = this.centerY + (Math.sin(angle) * (this.movementRadius - this.iconSize / 2));
        }
  
        // Apply movement with GSAP
        gsap.to(icon, {
          x: newX - iconX,
          y: newY - iconY,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });
  }
  

  private repositionIcons() {
    this.initialPositions = [];
    this.createIcons();
  }
}
