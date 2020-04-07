import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';


@Component({
  selector: 'app-navbarheader',
  templateUrl: './navbarheader.component.html',
  styleUrls: ['./navbarheader.component.css']
})
export class NavbarheaderComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {

  }

  OpenMenu(){
    console.log("Ejecutando funcion");
    this.eventEmitterService.isOpen = !this.eventEmitterService.isOpen;
  }
}
