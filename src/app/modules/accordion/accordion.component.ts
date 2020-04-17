import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = []
  openedItem = 0
  constructor() { }

  ngOnInit(): void {
  }
  onClick(i: number) {
    i === this.openedItem ? this.openedItem = -1 : this.openedItem = i
  }
}
