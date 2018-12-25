import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  
})
export class AnimateComponent implements OnInit {

  @Input() currentState;
  constructor() { }

  ngOnInit() {
  }

}
