import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent {
  @Input() icon: boolean = false
  constructor() { }
}
