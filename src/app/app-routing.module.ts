import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivoXmlComponent } from './arquivo-xml/arquivo-xml.component';
import { DuplicatasComponent } from './arquivo-xml/duplicatas/duplicatas.component';

const routes: Routes = [
  {
    path: 'nf-e',
    component: ArquivoXmlComponent
  },
  {
    path: 'nf-e/:id/duplicatas',
    component: DuplicatasComponent
  },
  { path: '', redirectTo: '/nf-e', pathMatch: 'full' },
  { path: '**', redirectTo: '/nf-e', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
