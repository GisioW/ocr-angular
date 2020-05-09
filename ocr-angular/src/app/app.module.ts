import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartOneComponent } from './part-one/part-one.component';
import {FormsModule} from '@angular/forms';
import { PartOneItemComponent } from './part-one/part-one-item/part-one-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PartOneComponent,
    PartOneItemComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
