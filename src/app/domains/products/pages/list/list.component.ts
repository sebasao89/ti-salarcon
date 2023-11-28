import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ProductComponent } from "../../components/product/product.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, ProductComponent]
})
export class ListComponent {

    imgs: string = "https://picsum.photos/640/640?r=" + Math.random()

    fromChild(event: string) {
        console.log(event)
    }

}
