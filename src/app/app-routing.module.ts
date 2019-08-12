import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemDetailFormComponent } from './item-detail-form/item-detail-form.component';
import { InsightsComponent } from './insights/insights.component';

const routes: Routes = [
  { path : '', component : ListItemsComponent, pathMatch: "full" },
  { path: 'products/:opr', component : ItemDetailFormComponent },
  { path: 'products/:opr/:productId', component : ItemDetailFormComponent },
  { path: 'insights', component : InsightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
