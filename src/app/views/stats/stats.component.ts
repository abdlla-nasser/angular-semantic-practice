import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent   {
  @Input('data') data = []
  constructor() { }

  ngOnInit(): void {
  }

}
