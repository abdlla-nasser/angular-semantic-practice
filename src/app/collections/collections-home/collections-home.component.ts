import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'Abdallah', age: 24, job:"front end developer"},
    {name: 'Omar', age: 24, job:"Doctor"},
    {name: 'Abdallah', age: 23, job:"Software Engineer"}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
