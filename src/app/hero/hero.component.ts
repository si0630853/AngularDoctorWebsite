import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  images = [
    'assets/doctor2.jpg',
    'assets/doctor3.jpg',
    'assets/doctor4.jpg'
  ];

  currentSlide = 0;
  ngOnInit(): void {
    // Auto Slideshow
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 5000); // change every 5 sec

    // Typed.js Effect
    new Typed('#typed-heading', {
      strings: [
        "Your Journey To Family Starts Here",
        "Trusted Fertility Centre in Karimnagar",
        "1,00,000+ Babies Born Through IVF"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}
