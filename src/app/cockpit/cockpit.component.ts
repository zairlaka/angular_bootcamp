import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  // newServerContent = ''; // will not longer required because we are using local reference read before userNameInput
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, serverUser: string}>(); // creating a property here
  // serverCreated is a property name and call in app.html <app-cockpit serverCreated)="onServerAdded($event)"></app-cockpit>
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, serverUser_c137: string}>();

  @ViewChild('userNameInput') userNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(contentInput) {
    // use in cockpit.html triger this function when user click on add server button
    // alert: should not use to change the element
    // like this.userNameInput.nativeElement.value = "something"
    console.log(contentInput); // we have parameter here because we need 
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: contentInput.value,
      serverUser: this.userNameInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(contentInput) {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: contentInput.value,
      serverUser_c137: this.userNameInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}



// for @Output we add here by alias 'bpCreated' decoraotor and import it
// in app.html we listening to serverCreated event and on this we want to execute onServerAdded() function

// <app-cockpit
// (serverCreated)="onServerAdded($event)"
// (bpCreated)="onBlueprintAdded($event)"
// ></app-cockpit>

// we catch and recive with the same data structure
// above you can see element property
// and in app.html serverElements = [{type: "blueprint", name: "default this server name", content: "default server content here"}];
