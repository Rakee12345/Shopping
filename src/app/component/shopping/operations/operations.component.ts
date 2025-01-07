import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {

  @Input () cname: string='';
  @Output () cevent = new EventEmitter<void>();

  // constructor(private communicationservice:CommunicationService){}

  sendData(){
    this.cevent.emit();
  }
  
}
