import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, // Commenred due to remove the home page and new homepage added
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  {path: 'movies/:id',loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule'},
  { path: 'movie-details', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
