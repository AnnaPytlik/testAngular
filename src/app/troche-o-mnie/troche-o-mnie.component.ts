import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-troche-o-mnie',
  templateUrl: './troche-o-mnie.component.html',
  styleUrls: ['./troche-o-mnie.component.scss']
})
export class TrocheOMnieComponent implements OnInit {
  faBriefcase=faBriefcase;
  constructor() { }

  ngOnInit() {
  }

}
