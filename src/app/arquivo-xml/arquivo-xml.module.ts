import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoXmlComponent } from './arquivo-xml.component';
import { DuplicatasComponent } from './duplicatas/duplicatas.component';

@NgModule({
  declarations: [ArquivoXmlComponent, DuplicatasComponent],
  imports: [CommonModule],
  exports: [ArquivoXmlComponent, DuplicatasComponent],
})
export class ArquivoXmlModule {}
