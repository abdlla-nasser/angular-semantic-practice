import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 3, label: 'Team Members' , image: 'assets/team.png'},
    { value: 6, label: 'Completed Projects', image: 'assets/test.png' },
    { value: 4, label: 'Fiverr Customers', image: 'assets/teamwork.png'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
