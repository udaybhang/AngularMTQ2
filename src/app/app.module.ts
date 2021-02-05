import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './MT/a/a.component';
import { BComponent } from './MT/b/b.component';
import { HomeComponent } from './MT/home/home.component';
import { MtroutingModule } from './mtrouting/mtrouting.module';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MtroutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
