import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CardModel } from '../../interfaces/card-model';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() enviandoCard = new EventEmitter<CardModel>();
  card:CardModel = {name:"",vida:0,atk:0, def:0, image:null, especialName:"",especial:""};
  @Input() element:any;

  onImageUpload(event:Event) {
    let input = event.target as HTMLInputElement;
    if(input?.files && input.files[0]) {
      let file = input.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.card.image = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }

  async downloadElementAsPng(){
    let canvas = await html2canvas(this.element, {scale:2})
    let imgData = canvas.toDataURL("image/png")

    let hrf = document.createElement("a");
    hrf.setAttribute("download",this.card.name);
    hrf.setAttribute('href', imgData)
    hrf.click();
  }

  enviarInformacao():void{
    this.enviandoCard.emit(this.card);
  }
}
