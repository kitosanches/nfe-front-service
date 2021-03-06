import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoXmlComponent } from './arquivo-xml.component';
import { DuplicatasComponent } from './duplicatas/duplicatas.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [ArquivoXmlComponent, DuplicatasComponent],
  imports: [CommonModule, FileUploadModule, HttpClientModule, TableModule, ButtonModule, ConfirmDialogModule],
  exports: [ArquivoXmlComponent, DuplicatasComponent],
})
export class ArquivoXmlModule { }
