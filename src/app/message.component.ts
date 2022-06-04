import { Component } from '@angular/core';

//here we are defining decorator a component decorator to be specific
@Component({
    selector: 'app-message',
    template: '<div class="am"><h3>hey! {{ourMessage()}} {{name}}</h3><app-nested-message></app-nested-message> render from parent app-message</div>',
    styles: [`
    h3 {
        color: olive;
        background-color: lightgray;
    }
    .am {
        background-color: lightgray;
    }
    `]
})

export class MessageComponent {
    name = 'zair';
    message: string = 'this is the app message';
    ourMessage(){
        return this.message;
    }
}

// what we did
// use inline template and style 
// string interpolation
// nested component 


// now import this new file in the module where you want to use it.
// first import and then add in app.module.ts -> NgModule -> declarations:
// second use that component in template like app.component.html

// we use inline template and inline styles 
// mostly these are in seperate files
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']

// must have template can omit others

//as a element selector: 'app-message' -> <app-message></app-message>
//as a element attribute: '[app-message]' -> <div app-message></div>
//as a element class: '.app-message' -> <div class="app-message"></div>

// in string interpolation you can only use ternary operator no if else no other things

// string interpolation {{ data }}
// property binding [property]="data"
// event binding (event)="expression"
// two-way binding [(ndModel)]="data"
    // you need to enable the ngModel  directive. by adding the FormsModule  to the imports[]  array in the AppModule.
    // you also need to add import { FormsModule } from '@angular/forms';