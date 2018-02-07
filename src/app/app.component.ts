import {Component, OnInit} from '@angular/core';
import { Car } from './domain/car';
import { CarService} from './services/carservice';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService]
})
export class AppComponent implements OnInit{
    
    displayDialog: boolean;
    
    car: Car = new PrimeCar();
    
    selectedCar: Car;
    
    newCar: boolean;
    
    cars: Car[];

    cols: any[];

    private loggedIn = false;
    
      toggelDisplay() {
        this.loggedIn = !this.loggedIn;
    }
    
    constructor(private carService: CarService) { 
        carService.getCarsSmall()
    .subscribe(
        (cars: any[]) => this.cars = cars,
        (error) =>console.log(error),
        () => console.log('task service completed')
    );
    }
    
    ngOnInit() {
      //  this.carService.getCarsSmall().then(cars => this.cars = cars);

       this.cols = [
        { field: 'articleid', header: 'ArticleId' },
        { field: 'title', header: 'title' },
       { field: 'category', header: 'Category' }
        ];
    }
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

export class PrimeCar implements Car {
    
    constructor(public articleid?, public title?, public category?) {}
}
