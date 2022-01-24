import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { BbComponent } from './b/bb/bb.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CellPhonePipe } from './cell-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    BbComponent,
    CellPhonePipe
  ],
  imports: [
    BrowserModule,
    MatTooltipModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
