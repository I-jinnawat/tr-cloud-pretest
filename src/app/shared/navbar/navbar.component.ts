import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class NavbarComponent {
  public items = [
    { name: 'Question 1', link: '/firstQ' },
    { name: 'Question 2', link: '/secondQ' },
    { name: 'Question 3', link: '/thirdQ' },
    { name: 'Question 4', link: '/fourthQ' },
  ];

  constructor() {}
}
