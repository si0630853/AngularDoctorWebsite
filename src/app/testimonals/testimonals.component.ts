import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css']
})
export class TestimonalsComponent implements AfterViewInit {
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild('subText') subText!: ElementRef;

  testimonials = [
    { text: "The doctors were very kind and attentive. I felt at ease during my treatment.", name: "Sarah K." },
    { text: "Excellent hospital environment and very professional staff. Highly recommended!", name: "Ali R." },
    { text: "Online telemedicine consultation was smooth and helped me save travel time.", name: "Maria S." },
    { text: "Best emergency care experience. Doctors were quick and supportive.", name: "John D." },
    { text: "The nutrition advice improved my lifestyle drastically. Thank you!", name: "Fatima B." },
    { text: "Highly advanced facilities with modern technology. Very satisfied!", name: "Ahmed K." }
  ];

  private titles = [
    "Patient Stories",
    "Real Experiences",
    "Trusted Feedback"
  ];
  private subs = [
    "Real feedback from our patients.",
    "Your health, our priority.",
    "Together towards better care."
  ];

  private index = 0;
  private charIndex = 0;
  private typingSub = false;

  ngAfterViewInit(): void {
    this.typeEffect();

    // Auto horizontal scroll
    const scroller = document.querySelector('.testimonials-scroll');
    if (scroller) {
      let scrollAmount = 0;
      setInterval(() => {
        scroller.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 25);
    }
  }

  private typeEffect() {
    const titleEl = this.heading.nativeElement as HTMLElement;
    const subEl = this.subText.nativeElement as HTMLElement;

    if (!this.typingSub) {
      const currentTitle = this.titles[this.index];
      if (this.charIndex < currentTitle.length) {
        titleEl.textContent = currentTitle.substring(0, this.charIndex + 1);
        this.charIndex++;
        setTimeout(() => this.typeEffect(), 120);
      } else {
        this.typingSub = true;
        this.charIndex = 0;
        setTimeout(() => this.typeEffect(), 400);
      }
    } else {
      const currentSub = this.subs[this.index];
      if (this.charIndex < currentSub.length) {
        subEl.textContent = currentSub.substring(0, this.charIndex + 1);
        this.charIndex++;
        setTimeout(() => this.typeEffect(), 80);
      } else {
        setTimeout(() => this.deleteEffect(), 1500);
      }
    }
  }

  private deleteEffect() {
    const titleEl = this.heading.nativeElement as HTMLElement;
    const subEl = this.subText.nativeElement as HTMLElement;

    if (this.typingSub) {
      const currentSub = this.subs[this.index];
      if (this.charIndex > 0) {
        subEl.textContent = currentSub.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.deleteEffect(), 40);
      } else {
        this.typingSub = false;
        this.charIndex = 0;
        setTimeout(() => this.deleteEffect(), 100);
      }
    } else {
      const currentTitle = this.titles[this.index];
      if (this.charIndex > 0) {
        titleEl.textContent = currentTitle.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.deleteEffect(), 60);
      } else {
        this.index = (this.index + 1) % this.titles.length;
        this.charIndex = 0;
        setTimeout(() => this.typeEffect(), 200);
      }
    }
  }
}
