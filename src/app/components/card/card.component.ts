import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() name:string = "";
  @Input() effect:string = "";
  @Input() image!: string | ArrayBuffer | null;
  @Input() atk:number = 0;
  @Input() shield:number = 0;
}
