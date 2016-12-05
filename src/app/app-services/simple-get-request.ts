import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()

export class DataService {
    // Base URL for Petfinder API
  	private petsUrl: string = "http://api.tvmaze.com/shows/1/episodes?date=" + new Date().toJSON().slice(0, 10);

    constructor( public http:Http ) { }

    getData() {
        return this.http.get(this.petsUrl).map(( res:Response ) => res.json());
    }
}