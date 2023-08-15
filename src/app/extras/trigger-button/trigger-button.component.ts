import { Component } from '@angular/core';
@Component({
  selector: 'app-trigger-button',
  templateUrl: './trigger-button.component.html',
  styleUrls: ['./trigger-button.component.scss'],
})
export class TriggerButtonComponent {
  state: boolean = false;
}
