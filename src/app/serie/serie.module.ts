import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SerieComponent],
  declarations: [SerieComponent]
})
export class SerieModule { }
