import { Component,OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';


@Component({
  selector: 'app-top',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [
    trigger('animateState', [
        state('active', style({
            width: 250
        })),
        
        transition('* => *', animate(4000))
    ]),
 
    trigger('txt1', [
      state('active', style({
          width: 250
      })),
      
      transition('* => *', animate(4000))
  ])
] 
})
export class HomeComponent  implements OnInit {



  public state = "active";

  constructor() {
      setTimeout(() => {
          this.state = "inactive";
      }, 4000)
  }
  ngOnInit() {
  }
}
