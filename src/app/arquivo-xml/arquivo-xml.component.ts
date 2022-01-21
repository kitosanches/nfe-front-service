import { ArquivoXmlModel } from './arquivo-xml.model';
import { ArquivoXmlService } from './arquivo-xml.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as xml2js from 'xml2js';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-arquivo-xml',
  templateUrl: './arquivo-xml.component.html',
  styleUrls: ['./arquivo-xml.component.css'],
})
export class ArquivoXmlComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  nomeArquivoAtual: string = '';
  cols!: any[];

  constructor(private router: Router, public arquivoXmlService: ArquivoXmlService) { }

  ngOnInit(): void {
    this.carregarColunas();
   }

  carregarColunas() {
    this.cols = [
      { campo: 'nomeArquivo', header: 'Arquivo' },
      { campo: 'numero', header: 'Chave' },
      { campo: 'nomeEmitente', header: 'Nome Emitente' },
      { campo: 'nomeDestinatario', header: 'Nome Destinatario' },
      { campo: 'valor', header: 'Valor Nota' },
      { campo: 'status', header: 'Status' }
  ];
  }

  selecionarArquivos(event: any) {
    for (let arquivo of event.files) {
      this.nomeArquivoAtual = arquivo.name;
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
    const conversor: xml2js.Parser = new xml2js.Parser({ explicitArray: false });
    conversor.parseString(xml, (err: any, result: any) => {
      if (err) {
        console.error(err)
        throw err;
      }
      const json = JSON.stringify(result, null, 4);
      this.adicionarArquivoLista(json);
    });
  }

  adicionarArquivoLista(json: any) {
    const arquivoJson = JSON.parse(json).notaFiscal;
    const arquivo = new ArquivoXmlModel();
    arquivo.id = +arquivoJson['id'];
    arquivo.nomeArquivo = this.nomeArquivoAtual;
    arquivo.nomeEmitente = arquivoJson['nomeEmitente'];
    arquivo.nomeDestinatario = arquivoJson.nomeDestinatario;
    arquivo.numero = +arquivoJson.numero;
    arquivo.valor = +arquivoJson.valor;
    this.arquivoXmlService.arquivos.push(arquivo);
  }
}
