import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardComponent } from "./components/card/card.component";
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CardComponent,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-generator';
  cardName = '';
  cardEffect = '';
  cardImage: string | ArrayBuffer | null = null;
  cardAtk:number = 0;
  cardGuard:number = 0;
  showCard = false;

  generateCard() {
    if (this.cardName && this.cardEffect && this.cardImage) {
      this.showCard = true;
    } else {
      this.showCard = false;
      alert('Preencha todos os campos e adicione uma imagem antes de gerar a carta!');
    }
  }

  async downloadCardAsPNG() {
    const cardElement = document.getElementById('card-preview');
    if (!cardElement) {
      alert('Não foi possível encontrar o card para gerar o PDF.');
      return;
    }

    const canvas = await html2canvas(cardElement, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const a = document.createElement("a");
    a.setAttribute("download", this.cardName);
    a.setAttribute('href', imgData)
    a.click();
  }

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.cardImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
