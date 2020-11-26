import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Landingpage } from './app.landingpage';
import { About } from './app.about';
import { Contact } from './app.contact';

const routes: Routes = [
{ path: '', component: Landingpage },
{ path: 'about', component: About },
{ path: 'contact', component: Contact }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
