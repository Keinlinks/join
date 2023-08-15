import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UppercaseFirstLetterPipe } from '../../../pipes/uppercase-first-letter.pipe';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.scss'],
  standalone: true,
  imports: [CommonModule, UppercaseFirstLetterPipe],
})
export class PromptsComponent {
  @Input() word!: string;
}
