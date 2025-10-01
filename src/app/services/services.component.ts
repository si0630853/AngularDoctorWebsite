import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('heading') heading!: ElementRef;

  services = [
    {
      title: 'General Consultation',
      desc: 'Expert physicians for everyday care with detailed follow-ups and guidance.',
      icon: 'bi bi-stethoscope'
    },
    {
      title: 'Surgery',
      desc: 'Advanced surgical procedures with modern equipment ensuring safe recovery.',
      icon: 'bi bi-scissors'
    },
    {
      title: 'Telemedicine',
      desc: 'Online doctor video calls. Secure, private and high-quality consultations from home.',
      icon: 'bi bi-camera-video'
    },
    {
      title: 'Laboratory',
      desc: 'Full diagnostic facilities including imaging, blood tests and pathology.',
      icon: 'bi bi-droplet'
    },
    {
      title: 'Pediatrics',
      desc: 'Specialized child care with routine checkups, vaccinations, and growth monitoring.',
      icon: 'bi bi-heart'
    },
    {
      title: 'Cardiology',
      desc: 'Complete heart checkups, ECG, stress tests, and advanced cardiac treatments.',
      icon: 'bi bi-activity'
    },
    {
      title: 'Orthopedics',
      desc: 'Bone, joint and spine treatments with advanced rehabilitation services.',
      icon: 'bi bi-bandaid'
    },
    {
      title: 'Dermatology',
      desc: 'Skin treatments, cosmetic procedures, and advanced dermatological care.',
      icon: 'bi bi-brush'
    },
    {
      title: 'Radiology',
      desc: 'Digital X-rays, MRI, CT scan and ultrasound with instant reporting.',
      icon: 'bi bi-image'
    },
    {
      title: 'Emergency Care',
      desc: '24/7 emergency services with rapid response and intensive care facilities.',
      icon: 'bi bi-hospital'
    },
    {
      title: 'Nutrition & Diet',
      desc: 'Personalized diet plans and nutrition counseling for all age groups.',
      icon: 'bi bi-cup-straw'
    },
    {
      title: 'Mental Health',
      desc: 'Psychiatric consultation, counseling, and stress management therapies.',
      icon: 'bi bi-emoji-smile'
    }
  ];

  private texts = [
    "Our Services",
    "Quality Healthcare",
    "Trusted by 1000+ Patients",
    "Advanced Medical Solutions"
  ];
  private index = 0;
  private charIndex = 0;

  ngAfterViewInit(): void {
    // Start typewriter animation
    this.typeEffect();

    // Auto horizontal scroll animation
    const scroller = document.querySelector('.services-scroll');
    if (scroller) {
      let scrollAmount = 0;
      setInterval(() => {
        scroller.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 20);
    }
  }

  private typeEffect() {
    const el = this.heading.nativeElement as HTMLElement;
    const currentText = this.texts[this.index];

    if (this.charIndex < currentText.length) {
      el.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
      setTimeout(() => this.typeEffect(), 120);
    } else {
      setTimeout(() => this.deleteEffect(), 1500);
    }
  }

  private deleteEffect() {
    const el = this.heading.nativeElement as HTMLElement;
    const currentText = this.texts[this.index];

    if (this.charIndex > 0) {
      el.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.deleteEffect(), 60);
    } else {
      this.index = (this.index + 1) % this.texts.length;
      setTimeout(() => this.typeEffect(), 200);
    }
  }
}
