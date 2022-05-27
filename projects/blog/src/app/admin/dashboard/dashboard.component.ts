import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  published: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},
  {id: 1, title: 'Hydrogen', published: true},

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  displayedColumns: string[] = ['id', 'title', 'published'];
  dataSource = ELEMENT_DATA;
  constructor() { }

}
