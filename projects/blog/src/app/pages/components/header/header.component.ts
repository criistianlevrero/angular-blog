import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems:MenuItem[] = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
