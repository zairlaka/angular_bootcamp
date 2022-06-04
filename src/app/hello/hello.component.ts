import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  allowGreetings = false;
  greetingStatus = 'Greeting status | No greetings yet.';
  greetingStatuses =['Hola', 'Merhaba '];
  greeterName: string  = 'NA';
  buttonClicked = false;
  userStatus: string = "offline";

  constructor() {
    setTimeout(() => {
      this.allowGreetings = true;
    }, 2000);

    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onCreateGreetings(){
    this.greetingStatus = "bonjour lala - by " + this.greeterName;
    this.buttonClicked = true;
    this.greetingStatuses.push(this.greeterName);
    console.log(this.greetingStatuses);
  }

  // onUpdateGreeterName(event: any){
  //   console.log(event)
  // }

  onUpdateGreeterName(event: Event){
    this.greeterName = (<HTMLInputElement>event.target).value;
    // we are doing explicit type casting here [32]
  }

  onEmptyGreeterName(){
    this.greetingStatus = "Greeting status | clear.";
    this.greeterName = "";
    this.buttonClicked = false;
  }

  getColor(){
    return this.userStatus === 'online' ? 'greenyellow' : 'tomato';
  }

}

// * what we did
// create this compoent by angular cli
// we use external template and styles
// we did property binding in this component
// we did event binding here like click and input(keypress)
// we use $event varialbe and get the value from that input element
// we use build-in directive *ngIf (structural directive)
// we use local reference
//   note! unlike structural directive, attribute directives don't add or remove elements. They only change the element they were placed on.
// we use ngStyle directive (attribute directive)
// we use ngClass directive to add or remove classes
// we use *ngFor directive for iterating array
// bind custom properties by putting @Input() in front of it in app and server-element getting
// alias @Input(new-element) element, assigning alias to custom property

// create custom event in cockpit component
// EventEmitter allows you to emit your own events
// use @Output Decorator for listenable or send data to our parent component
// sending 'Add server' and 'Add Blueprint' button events into app-component
// @Output decorator use for passing out something(here event) out of the component

// ues local reference on any html element and will hold the reference of that element with all its properties 
// by passing an argument and call that function (pass through method )

// sometimes we need to get access before call the method so we (fetch through the ViewChild)
// alert: should not change the element by this method for example this.userNameInput.nativeElement.value = "something"
// without a function Now there is also another way of getting access to local references or to any element actually directly from within our typescript code.
// we use @ViewChile('local_reference or child compnent ') decorator for sending 

// we use <ng-content> in child and add html element in parent.html use 

// we use many lifecycle hooks

// we use @ContentChild to send back the element text render in app.html via ng-content from server.html  


// * my question
// this.greeterName = (<HTMLInputElement>event.target).value;
// is there version manager for angular too

// * my findings
// Property binding is done using "[ ]" attribute and event binding is done using "( )" attribute.
// <pre>{{ element | json }} </pre> will be your friend for debugging object in html
// to get a value should use (<HTMLInputElement>event.target).value; with (input)="onUpdate($event)" and
// just value with (ngModelChange)="changed($event,'f')

// send data from parent to child component 
//  parent.ts data = "zair"
// parent.html  <child_component [Child_data] = "data"></child_component>
// child.ts @Input Child_data; -> 
//    selector: 'child_component',
//    template: '<h1>this is {{ Child_data }}</h1>',

// send data from child to parent
// child.ts
    // @Output() share_variable = ParentCompnent:EventEmitter<any> = new EventEmitter();
    // ngOnInit(): void {
    //    this.ParentComponent.emit('zair string');
    // }
// parent.ts 
    // val_from_child: string;
    // getDataFromChild(data){
    //   console.log(data); // print in console 
    //   this.val_from_child = data; // to use as {{ val_from_child }} in parent.html
    // }
// parent.html
    // <child_component (ParentComponent)="getDataFromChild($event)"></child_component>

// ----- live example 
// child.ts
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // onAddServer() {
    //   this.serverCreated.emit({
    //     serverName: this.newServerName,
    //     serverContent: this.newServerContent
    //   });
    // }