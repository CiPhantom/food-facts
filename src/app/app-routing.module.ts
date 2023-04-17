import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNameComponent } from './pages/search-name/search-name.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: SearchNameComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'subscribe', component: SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
