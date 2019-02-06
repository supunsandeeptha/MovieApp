import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  constructor(private acivatedRoute: ActivatedRoute, private movieService: MovieService) { }


  ngOnInit() {
    // get the id that was passed with the URL 
    let id = this.acivatedRoute.snapshot.paramMap.get('id');


    // get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  openWebsite(){
    window.open(this.information.Website,'_blank');
  }
// comment added
}
