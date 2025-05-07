import { Component, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-thirdQ',
  templateUrl: './thirdQ.component.html',
  styleUrl: './thirdQ.component.scss',
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class ThirdQComponent implements OnInit {
  public arr1: { code: string; name: string }[] = [];
  public arr2: { code: string; city: string }[] = [];
  public result: { code: string; name: string; city: string }[] = [];
  constructor() {
    this.arr1 = [
      {
        code: '101',
        name: 'AAA',
      },
      {
        code: '102',
        name: 'BBB',
      },
      {
        code: '103',
        name: 'CCC',
      },
    ];
    this.arr2 = [
      {
        code: '103',
        city: 'Singapore',
      },
      {
        code: '102',
        city: 'Tokyo',
      },
      {
        code: '101',
        city: 'Bangkok',
      },
    ];
  }

  ngOnInit() {
    for (let i = 0; i < this.arr1.length; i++) {
      const arr1Item = this.arr1[i];
      for (let j = 0; j < this.arr2.length; j++) {
        const arr2Item = this.arr2[j];

        if (arr1Item.code == arr2Item.code) {
          this.result.push({
            code: arr1Item.code,
            name: arr1Item.name,
            city: arr2Item.city,
          });
        }
      }
    }
  }
}
