import { Component } from '@angular/core';

@Component({
  selector: 'app-site-middle',
  templateUrl: './site-middle.component.html',
  styleUrls: ['./site-middle.component.css']
})
export class SiteMiddleComponent {
  currentImage = 'assets/img/iphone1.png';
  selectedSize: string | null = null;
  selectedColor: string | null = null;

  selectSize(size: string) {
    this.selectedSize = size;
    console.log(`Selected size: ${size}`);
    
  }

  selectColor(color: string) {
    this.selectedColor = color;
    if (color === 'color1') {
      this.currentImage = 'assets/img/iphone1.png';
    } else if (color === 'color2') {
      this.currentImage = 'assets/img/iphone2.png';
    }
    console.log(`Selected color: ${color}`);
  }

  placeOrder() {
    window.location.href = 'https://www.google.com/';
  }
}
