import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardComponent } from "../card/card.component";
import { FormComponent } from "../form/form.component";
import { CardModel } from '../../interfaces/card-model';

@Component({
  selector: 'app-card-creator',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CardComponent, FormComponent],
  templateUrl: './card-creator.component.html',
  styleUrl: './card-creator.component.css'
})
export class CardCreatorComponent {
  card:CardModel = {name:"",vida:0,atk:0, def:0, image:null, especial:""};
  element:any;
  
  recebendoInformacao(event:CardModel){
    this.card = event;
    this.element = document.getElementById("card-preview"); 
    console.log(event);
  }
}
