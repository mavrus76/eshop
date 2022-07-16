import { Component, Input, OnInit } from '@angular/core';
import { DeliveryOptions } from 'src/app/types/card';

@Component({
  selector: 'app-delivery-options',
  template: `
    <div class="delivery__option">
      Доставим на дом:
      <em>{{ options.delivery }}</em>
    </div>
    <div class="delivery__option">
      Доставка в постамат:
      <em>{{ postamate }}</em>
    </div>
    <div class="delivery__option">
      В наличии:
      <em>{{ options.available }} шт.</em>
    </div>
  `,
  styleUrls: ['./delivery-options.component.scss'],
})
export class DeliveryOptionsComponent implements OnInit {
  @Input()
  options!: DeliveryOptions;

  constructor() {}

  ngOnInit(): void {}
  get postamate(): string {
    return this.options.postamate ? 'доступна' : 'недоступна';
  }
}
