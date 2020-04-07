import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  public isOpen:boolean = true;
  invokeFirstComponentFunction = new EventEmitter();
  subsVar = Subscription;

  constructor() { 
    
  }


  OpenOrCloseMenu(){
      console.log("Event emitter work");
      this.invokeFirstComponentFunction.emit();
  }

}
