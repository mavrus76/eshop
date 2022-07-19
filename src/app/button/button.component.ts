import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button class="button">{{ value }}</button> `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() value = ' Добавить в корзину';

  constructor() {}

  ngOnInit(): void {}
}
