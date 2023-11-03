import { Component } from '@angular/core';
import { Renderer2,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  showFiller = false;
}
