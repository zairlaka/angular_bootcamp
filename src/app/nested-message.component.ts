import { Component } from '@angular/core';

//here we are defining decorator a component decorator to be specific
@Component({
    selector: 'app-nested-message',
    template: '<span>i am the nested template from nested-message component<span>',
    styles: [`
    span {
        color: red;
    }
    `]
})

export class NestedMessageComponent { }
