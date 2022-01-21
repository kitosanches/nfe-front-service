import { DuplicataModel } from './duplicata.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicatas',
  templateUrl: './duplicatas.component.html',
  styleUrls: ['./duplicatas.component.css']
})
export class DuplicatasComponent implements OnInit {
  duplicatas: DuplicataModel[]
  cols!: any[];

  constructor(private location: Location, private router: Router) {
    this.duplicatas = [];
  }

  ngOnInit(): void {
    this.carregarColunas();
    this.carregarDuplicatas();

  }

  voltar() {
    this.location.back();
  }

  carregarColunas() {
    this.cols = [
      { campo: 'valor', header: 'Valor' },
      { campo: 'parcela', header: 'Parcela' },
      { campo: 'dataVencimento', header: 'Data de Vencimento' },
    ];
  }

  carregarDuplicatas() {
    const duplicatasXml: any[] = window.history.state.duplicatas;
    if (duplicatasXml && duplicatasXml.length > 0) {
      duplicatasXml.forEach((duplicataXml) => {
        const duplicata = new DuplicataModel();
        duplicata.id = +duplicataXml.id;
        duplicata.valor = +duplicataXml.valor;
        duplicata.parcela = +duplicataXml.parcela;
        duplicata.dataVencimento = duplicataXml.dataVencimento;
        this.duplicatas.push(duplicata);
      });
    }
  }

}
