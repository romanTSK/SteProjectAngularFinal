import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('slidesContainer') slidesContainer!: ElementRef;
  slides: any[] = [];
  slideIndex = 0;
  intervalId: any;

  constructor(private renderer: Renderer2) {}

  // ngOnInit() {
  //   this.initializeSlider();
  // }

  // initializeSlider() {
  //   if (this.slidesContainer) {
  //     this.slides = this.slidesContainer.nativeElement.querySelectorAll('img');
  //     if (this.slides.length > 0) {
  //       this.renderer.addClass(this.slides[this.slideIndex], 'displaySlide');
  //       this.intervalId = setInterval(() => this.nextSlide(), 5000);
  //     }
  //   }
  // }

  // showSlide(index: number) {
  //   if (index >= this.slides.length) {
  //     this.slideIndex = 0;
  //   } else if (index < 0) {
  //     this.slideIndex = this.slides.length - 1;
  //   } else {
  //     this.slideIndex = index;
  //   }

  //   this.slides.forEach((slide: any) => {
  //     this.renderer.removeClass(slide, 'displaySlide');
  //   });
  //   this.renderer.addClass(this.slides[this.slideIndex], 'displaySlide');
  // }

  // prevSlide() {
  //   clearInterval(this.intervalId);
  //   this.showSlide(this.slideIndex - 1);
  // }

  // nextSlide() {
  //   this.showSlide(this.slideIndex + 1);
  // }
}
