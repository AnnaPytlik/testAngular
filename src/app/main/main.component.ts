import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';
import { ConnectionService } from "../../app/ConnectionService";
import { faFolderOpen,faFileSignature,faPersonBooth } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss'],
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
export class MainComponent  implements OnInit {
    faFolderOpen=faFolderOpen;
    faFileSignature=faFileSignature;
    faPersonBooth=faPersonBooth;


  public state = "active";

 

  ngOnInit() {}


contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    setTimeout(() => {
        this.state = "active";
    }, 4000)

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  }
