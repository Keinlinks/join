import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PromptsComponent } from './prompts/prompts.component';
import { UppercaseFirstLetterPipe } from 'src/app/pipes/uppercase-first-letter.pipe';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PromptsComponent,
    UppercaseFirstLetterPipe,
  ],
})
export class AlbumPopupComponent {
  isEdit: boolean = true;
  title: string = 'Titulo de album super largo JAJA';
  prompts: string[] = [];
  prompt: string = '';
  editTitle() {
    this.isEdit = !this.isEdit;
  }
  addPrompts() {
    if (!this.prompts.includes(this.prompt)) {
      this.prompts.push(this.prompt);
      this.prompt = '';
    }
  }
  removePrompt(value: string) {
    this.prompts = this.prompts.filter((prompt) => {
      return prompt !== value;
    });
  }
}
