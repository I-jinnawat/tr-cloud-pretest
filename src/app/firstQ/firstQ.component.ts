import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-firstQ',
  templateUrl: './firstQ.component.html',
  imports: [FormsModule, NgTemplateOutlet],
})
export class FirstQComponent {
  public star: any;
  public result: string = '';

  onSubmit(): void {
    this.result =''
    const isOdd: boolean = this.star % 2 !== 0;
    if (isOdd) {
      for(let i = this.star;i>0;i--){
        this.result += '*'.repeat(i) + '\n'
      }
    } else {
      for (let i = 1; i <= this.star; i++) {
        this.result += '*'.repeat(i) + '\n';
      }
    }
    this.star = null
  }
}
