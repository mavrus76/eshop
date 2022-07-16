import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';

@NgModule({
  declarations: [ButtonComponent, ButtonIconComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ButtonIconComponent],
})
export class ButtonModule {}
