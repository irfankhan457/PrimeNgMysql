import { Injectable } from '@angular/core';
//import { HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';

//import { Car } from '../domain/car';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class CarService {
    
    //constructor(private http: HttpClient) {}
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('/user/articles')
        .map(
            (response: Response) => {
                return response.json();
            }
        );
    }
    
    //getCarsSmall() {
    //    return this.http.get<any>('http://localhost:8080/user/articles')
    //        .toPromise()
    //        .then(res => <Car[]> res.data)
    //        .then(data => data);
    //}
}
