import { Component, Input } from '@angular/core';

@Component({
  selector: 'temperature',
   templateUrl: './temperature.component.html',
})
export class TemperatureComponent  {
  c: any;
  f: any;
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  changed(value: any, type: any) {
    if (value) {
      if (type === 'c') {
        let feh = (value * 9 / 5) + 32;
        this.f = feh.toFixed(1);
      } else {
        let cel = (value - 32) * (5 / 9);
        this.c = cel.toFixed(1);
      }
    } else {
      this.c = null;
      this.f = null;
    }
  }

  // changedc(value: any, type: any){
  //   let feh = (value * 9 / 5) + 32;
  //   this.f = feh.toFixed(1);
  // }

  // changedf(value: any, type: "f"){
  //   let cel = (value - 32) * (5 / 9);
  //   this.c = cel.toFixed(1);
  // }


}
