// changed(value: number, type: any) {
//   if (value) {
//     if (type === 'c') {
//       let feh = (value * 9 / 5) + 32;
//       this.ftemp = Number(feh.toFixed(1));
//     } else {
//       let cel = (value - 32) * (5 / 9);
//       this.ctemp = Number(cel.toFixed(1));
//     }
//   } else {
//     this.ctemp = 0;
//     this.ftemp = 0;
//   }

// }

// <input type="number" class="large" data-test-id="celsius-input"
//     [(ngModel)]="ctemp" (ngModelChange)="changed($event,'c')"/>

// <input type="number" class="large" data-test-id="fahrenheit-input"
//     [(ngModel)]="ftemp" (ngModelChange)="changed($event,'f')"/>