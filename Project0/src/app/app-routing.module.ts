import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { GamerzComponent } from './gamerz/gamerz.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'search', component: SearchComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'gamerz', component: GamerzComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
