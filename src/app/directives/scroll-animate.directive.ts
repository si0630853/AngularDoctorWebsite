import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]'
})
export class ScrollAnimateDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      this.el.nativeElement.classList.add('show');
    }
  }
}
