import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {CategoriesComponent} from './categories/categories.component';
import {FranchiseComponent} from './franchise/franchise.component';

const appRoutes: Routes = [
    {
        path:'',
        component: MoviesComponent
    },
    {
        path:'movie/:id',
        component: MovieComponent
    },
    {
        path:'category/:id',
        component: CategoriesComponent
    },
    {
        path:'franchise/:id',
        component: FranchiseComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);