import { Injectable } from '@angular/core';
import { ArquivoXmlModel } from './arquivo-xml.model';

@Injectable({
  providedIn: 'root'
})
export class ArquivoXmlService {
  arquivos: ArquivoXmlModel[] = [];
  constructor() { }
}
