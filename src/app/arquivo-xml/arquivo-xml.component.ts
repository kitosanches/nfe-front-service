import { ArquivoXmlService } from './arquivo-xml.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-arquivo-xml',
  templateUrl: './arquivo-xml.component.html',
  styleUrls: ['./arquivo-xml.component.css'],
})
export class ArquivoXmlComponent implements OnInit {

  constructor(private router: Router, public arquivoXmlService: ArquivoXmlService) { }

  ngOnInit(): void { }

  selecionarArquivos(event: any) {
    for (let arquivo of event.files) {
      this.leitorArquivosXml(arquivo);
    }
  }

  leitorArquivosXml(arquivo: any) {
    const reader = new FileReader();
    reader.readAsText(arquivo);
    reader.onload = (evt) => {
      const xml: string = (evt as any).target.result;
      this.converterXmlJson(xml)
    };
  }

  converterXmlJson(xml: string) {
    const conversor: xml2js.Parser = new xml2js.Parser({explicitArray:false});
    conversor.parseString(xml, (err: any, result: any) => {
      if (err) {
        console.error(err)
        throw err;
      }
      const json = JSON.stringify(result, null, 4);
    });
  }

  adicionarArquivoLista(json: any) {
    const arquivo = JSON.parse(json);
    this.arquivoXmlService.arquivos.push(arquivo);
  }
}
