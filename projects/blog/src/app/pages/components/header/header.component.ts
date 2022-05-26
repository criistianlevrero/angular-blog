import { Component } from '@angular/core';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  menuItems:MenuItem[] = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
  ]

  constructor() { }



}
