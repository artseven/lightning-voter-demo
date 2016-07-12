import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { NG1_COMPONENTS } from '../upgradedNg1Components';

@Component({
  selector: 'create-new-session',
  templateUrl: '/home/createNewSession.component.html',
  directives: [NG1_COMPONENTS]
})
export class CreateNewSessionComponent {
  @Input() userSessions: any;
  title: string;
  length: string;
  abstract: string;

  constructor(
    @Inject('toastr') private toastr:any,
    @Inject('currentIdentity') private currentIdentity:any,
    @Inject('sessions') private sessions) {

  }

  create() {
    let newUserSession = {
      title: this.title,
      length: parseInt(this.length),
      abstract: this.abstract,
      userFirstName: this.currentIdentity.currentUser.firstName,
      userLastName: this.currentIdentity.currentUser.lastName,
      userId: this.currentIdentity.currentUser.id,
    }
    
    this.sessions.createNewSession(newUserSession).then(response => {
      this.userSessions.push(response.data);
    })

  }
} 

