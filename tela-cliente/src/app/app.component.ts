import { Component, OnInit } from '@angular/core';
import { Dish } from './model/dish';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductCarouselComponent,
    OrderSummaryComponent,
    DeliveryInfoComponent,
    FormsModule,
    OrderStatusComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VEM COMER';
  products: Dish[] = [];
  selectedProducts: Dish[] = [];

  ngOnInit() {
    this.products = [
      new Dish('HAMBÚRGUER', 'assets/imagens/hamburguer.jpg', 29.97, 'Descrição do hambúrguer'),
      new Dish('SANDUÍCHE', 'assets/imagens/sanduiche.jpg', 14.99, 'Descrição do sanduíche'),
      new Dish('LASANHA', 'assets/imagens/lasanha.jpg', 37.99, 'Descrição do lasanha'),
    ];
  }

  addToOrder(product: Dish) {
    this.selectedProducts.push(product);
  }

  removeFromOrder(product: Dish) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.selectedProducts.splice(index, 1);
    }
  }

  get total() {
    return this.selectedProducts.reduce((sum, product) => sum + product.price, 0);
  }
}
