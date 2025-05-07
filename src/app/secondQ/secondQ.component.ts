import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-secondQ',
  templateUrl: './secondQ.component.html',
  styleUrls: ['./secondQ.component.scss'],
  standalone: true,
  imports: [NgFor, FormsModule],
})
export class SecondQComponent {
  public items:{key:number}[] = [
    { key: 100 },
    { key: 7 },
    { key: 107 },
    { key: 3 },
    { key: 104 },
  ];
  public values: (number | null)[] = [null, null, null, null, null];
  onSubmit() {
    let baseIndex:number = -1;
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] !== null) baseIndex = i;
    }
    if (baseIndex === -1 || this.values[baseIndex] === null) return;
    const baseValue:number|null = this.values[baseIndex];
    const baseRatio:number = this.items[baseIndex].key;
    
    if (!baseRatio || baseValue === null) return;

    const diff:number = baseValue / baseRatio;

   
  this.values = this.items.map((i) => i.key * diff)

  }
  clear(): void {
    this.values = Array(this.values.length).fill(null)
  }
}
