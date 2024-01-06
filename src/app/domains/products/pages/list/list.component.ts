import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { ProductComponent } from "../../components/product/product.component";

// MODELS
import { Product } from "../../../shared/models/product.model";
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';


@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, ProductComponent, HeaderComponent]
})
export class ListComponent {

    // products = signal<Product[]>([
    //     { id: Date.now(), name: "Product 2", price: 200, image: 'https://picsum.photos/640/640?r=' + Math.random(), reference: 'Reference2', description: 'description1' },
    //     { id: Date.now(), name: "Product 3", price: 300, image: 'https://picsum.photos/640/640?r=' + Math.random(), reference: 'Reference3', description: 'description2' },
    //     { id: Date.now(), name: "Product 1", price: 100, image: 'https://picsum.photos/640/640?r=' + Math.random(), reference: 'Reference1', description: 'description3' },
    //     { id: Date.now(), name: "Product 4", price: 400, image: 'https://picsum.photos/640/640?r=' + Math.random(), reference: 'Reference4', description: 'description4' },
    //     { id: Date.now(), name: "Product 5", price: 500, image: 'https://picsum.photos/640/640?r=' + Math.random(), reference: 'Reference5', description: 'description5' },
    // ])

    products = signal<Product[]>([])

    imgs: string = "https://picsum.photos/640/640?r=" + Math.random()

    private cartService = inject(CartService)
    private productService = inject(ProductService)

    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: (products) => {
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
