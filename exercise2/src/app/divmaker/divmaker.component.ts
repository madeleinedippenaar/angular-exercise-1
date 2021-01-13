import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divmaker',
  templateUrl: './divmaker.component.html',
  styleUrls: ['./divmaker.component.css']
})
export class DivmakerComponent implements OnInit {
shape: number = 0;
circle: boolean = false;

  getSize() {
    console.log(this.shape);
    return `${this.shape}px`
  }

isCircle() {
  console.log(this.circle);
  this.circle = !this.circle;
}

  constructor() { }

  ngOnInit(): void {
  }

}
