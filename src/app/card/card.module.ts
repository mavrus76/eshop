import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { BadgeComponent } from './badge/badge.component';
import { RatesComponent } from './rates/rates.component';
import { PriceComponent } from './price/price.component';
import { ColorOptionComponent } from './color-option/color-option.component';
import { DeliveryOptionsComponent } from './delivery-options/delivery-options.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    CardComponent,
    BadgeComponent,
    RatesComponent,
    PriceComponent,
    ColorOptionComponent,
    DeliveryOptionsComponent,
  ],
  imports: [CommonModule, ButtonModule],
  exports: [CardComponent],
})
export class CardModule {}
