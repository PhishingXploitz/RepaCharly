import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(public eventEmitterService: EventEmitterService) { 
    this.eventEmitterService.isOpen = this.eventEmitterService.isOpen;
  }

  ngOnInit() {

  }

  // firstComponentFunction(){
  //   this.eventEmitterService.isOpen = !this.eventEmitterService.isOpen;
  // }


}
