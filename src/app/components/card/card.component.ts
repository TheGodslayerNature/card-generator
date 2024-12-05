import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() nome!:string;
  @Input() vida!:number;
  @Input() atk!:number;
  @Input() def!:number;
  @Input() especial!:string;
  @Input() img!:string | ArrayBuffer | null;
  @Input() especialName!: string;
}
