import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('elemento') s_element: { type: string, name: string, content: string, userName: string }; // we define here property which gonna have this datatype here it is object like
  @Input() userName_noc: string; // for ngOnChange
  @ViewChild('heading_LR') hdr_LR: ElementRef;
  @ContentChild('serverUsername') userName_LR: ElementRef;

  constructor() { 
    console.log("%c🚀🚀🚀 ~ constructor","background:greenyellow;font-size:20px")
  }

  ngOnChanges(changes: SimpleChanges) { //these are the hooks
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("%c🚀🚀🚀 ~ ngOnChanges","background:darkturquoise;font-size:20px");
    console.log("🚀🚀 ~ ngOnChanges", changes);
    // if we change something 
  }

  ngOnInit(): void {
    console.log("%c🚀🚀🚀 ~ ngOnInit","background:cadetblue;font-size:20px");

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("%c🚀🚀🚀 ~ ngDoCheck","background:hotpink;font-size:20px");

    // called whenever angular checks for any changes 
    // can be use if you want to check and change something manually because angular didn't pick it up or something 
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("%c🚀🚀🚀 ~ ngAfterContentInit","background:darkseagreen;font-size:20px");
    console.log("🚀🚀 ~ ngAfterContentInit - displaying ContentChild value Local reference which we can't use it before ngAfterViewInit -> this.hdr_LR.nativeElement.textContent = ", this.userName_LR.nativeElement.textContent);

    
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("%c🚀🚀🚀 ~ ngAfterContentChecked","background:darkorange;font-size:20px");

    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("%c🚀🚀🚀 ~ ngAfterViewInit","background:rosybrown;font-size:20px");
    // gives us access to the template element access them or use their values 
    console.log("🚀🚀 ~ ngAfterViewInit - displaying ViewChild value Local reference which we can't use it before ngAfterViewInit -> this.hdr_LR.nativeElement.textContent = ", this.hdr_LR.nativeElement.textContent);
    

    
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("%c🚀🚀🚀 ~ ngAfterViewChecked","background:mediumspringgreen;font-size:20px");

    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("%c🚀🚀🚀 ~ ngOnDestroy","background:tomato;color:#000;font-size:20px")
    
  }

}

// for @Input we add here by alias 'elemento' decoraotor and import it
// app.html elmento contains every index of serverElements array .e.i

// <app-server-element
//  *ngFor="let serverElement of serverElements"
//  [elemento]="serverElement"></app-server-element>

// we catch and recive with the same data structure
// above you can see element property
// and in app.html serverElements = [{type: "blueprint", name: "default this server name", content: "default server content here"}];





// **** A Versions *****
// * notes for different angular versions

// @ViewChild() in Angular 8+ same for @contentChild
// In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

// Instead of:

// @ViewChild('serverContentInput') serverContentInput: ElementRef;
// use

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
// The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

// If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

// If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.