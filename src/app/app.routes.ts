import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NoFoundComponent } from './domains/info/pages/no-found/no-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { HomeComponent } from './domains/home/pages/home/home.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./domains/shared/components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'products',
                loadComponent: () => import('./domains/products/pages/layout-product/layout-product.component').then(m => m.LayoutProductComponent),
                children: [
                    {
                        path: ':id',
                        title: 'Products id',
                        component: ProductDetailComponent
                    },
                    {
                        path: '',
                        title: 'Products home',
                        component: ListComponent
                    },
                ]
            },
            {
                path: 'about',
                component: AboutComponent
            },
        ]
    },
    {
        path: '**',
        component: NoFoundComponent
    }
];