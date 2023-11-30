import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ProductComponent } from "../../components/product/product.component";

// MODELS
import { Product } from "../../../shared/models/product.model";


@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, ProductComponent]
})
export class ListComponent {

    products = signal<Product[]>([
        { id: 1, title: "Product 1", price: 100, image: 'https://picsum.photos/640/640?r=' + Math.random() },
        { id: 2, title: "Product 2", price: 200, image: 'https://picsum.photos/640/640?r=' + Math.random() },
        { id: 3, title: "Product 3", price: 300, image: 'https://picsum.photos/640/640?r=' + Math.random() },
        { id: 4, title: "Product 4", price: 400, image: 'https://picsum.photos/640/640?r=' + Math.random() },
        { id: 5, title: "Product 5", price: 500, image: 'https://picsum.photos/640/640?r=' + Math.random() },
    ])

    imgs: string = "https://picsum.photos/640/640?r=" + Math.random()


    fromChild(event: string) {
        console.log(event)
    }

}
