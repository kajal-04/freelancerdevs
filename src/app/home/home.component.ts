import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('circleContainer', { static: true }) circleContainer!: ElementRef<SVGElement>;

  ngAfterViewInit() {
    const radius = 200;
    const centerX = 400;
    const centerY = 400;
    const duration = 5;

    const circles = this.circleContainer.nativeElement.querySelectorAll('g.smallCircleGroup');
    const totalCircles = circles.length;

    circles.forEach((circle, index) => {
      let angleObj = { angle: (index * 360) / totalCircles };

      gsap.to(angleObj, {
        angle: angleObj.angle + 360,
        duration: duration,
        repeat: -1,
        ease: "linear",
        onUpdate: function () {
          const radianAngle = (angleObj.angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(radianAngle);
          const y = centerY + radius * Math.sin(radianAngle);

          // Apply transformation to the <g> element
          circle.setAttribute("transform", `translate(${x},${y})`);
        },
      });
    });
  }
}
