import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoXmlComponent } from './arquivo-xml.component';
import { DuplicatasComponent } from './duplicatas/duplicatas.component';
import { FileUploadModule } from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ArquivoXmlComponent, DuplicatasComponent],
  imports: [CommonModule, FileUploadModule, HttpClientModule],
  exports: [ArquivoXmlComponent, DuplicatasComponent],
})
export class ArquivoXmlModule {}
