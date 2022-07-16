import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  template: `
    <div class="stars">
      <input
        type="radio"
        id="rate5"
        name="rating"
        value="5"
        [attr.checked]="isChecked(5)"
        readonly
      /><label for="rate5"></label>
      <input
        type="radio"
        id="rate4"
        name="rating"
        value="4"
        [attr.checked]="isChecked(4)"
        readonly
      /><label for="rate4"></label>
      <input
        type="radio"
        id="rate3"
        name="rating"
        value="3"
        [attr.checked]="isChecked(3)"
        readonly
      /><label for="rate3"></label>
      <input
        type="radio"
        id="rate2"
        name="rating"
        value="2"
        [attr.checked]="isChecked(2)"
        readonly
      /><label for="rate2"></label>
      <input
        type="radio"
        id="rate1"
        name="rating"
        value="1"
        [attr.checked]="isChecked(1)"
        readonly
      /><label for="rate1"></label>
    </div>
  `,
  styleUrls: ['./rates.component.scss'],
})
export class RatesComponent implements OnInit {
  @Input() rating: any;
  constructor() {}

  ngOnInit(): void {}
  isChecked(value: any): string {
    return this.rating === value ? '' : this.rating;
  }
}
