import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NoFoundComponent } from './domains/info/pages/no-found/no-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { HomeComponent } from './domains/home/pages/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'products',
                component: ListComponent
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
