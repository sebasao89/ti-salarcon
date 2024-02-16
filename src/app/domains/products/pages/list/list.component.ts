import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { ProductComponent } from "../../components/product/product.component";

// MODELS
import { Product } from "../../../shared/models/product.model";
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, RouterModule, ProductComponent, HeaderComponent]
})
export class ListComponent {

    products = signal<Product[]>([])
    
    // imgs: string = "https://picsum.photos/640/640?r=" + Math.random()
    
    private cartService = inject(CartService)
    private productService = inject(ProductService)

    

    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: (products) => {
                console.log(products)
                this.products.set(products)
            },
            error: () => {
                console.error(Error)
            }
        })
    }

    addToCart(product: Product) {
        // console.log(event)
        this.cartService.addProduct(product)
    }

}
