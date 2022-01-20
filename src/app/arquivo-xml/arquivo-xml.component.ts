import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arquivo-xml',
  templateUrl: './arquivo-xml.component.html',
  styleUrls: ['./arquivo-xml.component.css'],
})
export class ArquivoXmlComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
