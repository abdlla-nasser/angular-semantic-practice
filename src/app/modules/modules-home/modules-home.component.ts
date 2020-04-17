import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
  model = false;
  accordionItems = [
    { title: 'Why React', content: "react is more stright forward, easier and simpler but also quite powerful but with the cost of a lot of configuration and effort for larger and more complex apps. freedom comes at a cost"},
    { title: 'and Conversely why Angular', content: "while angular is more complex it's fully featured meaning less time finding solutions and leaving more time to development.and it also scales very well for large apps"},
    { title: 'Final thoughts', content: "at the end, a descision like choosing which should be left entirely to depend on the type and size of the application"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.model = !this.model
  }
}
