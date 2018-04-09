import { Component, OnInit, ViewChild, ElementRef,
EventEmitter, Output } from '@angular/core';
import { Friend } from '../friend.model';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
  inputInfo : Friend = new Friend("", "", "");

  @ViewChild('inputContact') inputContact: ElementRef;

  @Output() friendAdded = new EventEmitter<Friend>();

  constructor() { }

  ngOnInit() {
  }


  onAddFriend(inputEmail: HTMLInputElement){
    console.log("Add Friend");
    console.log(this.inputInfo);
    console.log(inputEmail.value);
    console.log(this.inputContact.nativeElement.value);
    this.friendAdded.emit(new Friend(
      this.inputInfo.name,
      inputEmail.value,
      this.inputContact.nativeElement.value
    ));
  }
}
