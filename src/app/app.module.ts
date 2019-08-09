import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import {MatSelectModule} from '@angular/material/select';
import { ItemCardComponent } from './item-card/item-card.component';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { ItemDetailFormComponent } from './item-detail-form/item-detail-form.component';
import { CustomChipsInputComponent } from './custom-chips-input/custom-chips-input.component';
import { from } from 'rxjs';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    ItemCardComponent,
    CustomToolbarComponent,
    ItemDetailFormComponent,
    CustomChipsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatChipsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
