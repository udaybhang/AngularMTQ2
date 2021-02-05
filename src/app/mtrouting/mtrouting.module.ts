import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AComponent } from '../MT/a/a.component';
import { BComponent } from '../MT/b/b.component';
import { HomeComponent } from '../MT/home/home.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: AComponent },
      { path: 'bcomponent', component: BComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class MtroutingModule { }
