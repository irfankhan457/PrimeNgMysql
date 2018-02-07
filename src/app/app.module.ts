import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {RouterModule} from '@angular/router';
import {JavaComponent} from './views/java.component';
import {AndroidComponent} from './views/android.component';
import {HomeComponent} from './views/home.component';
import {routes} from './app.rout';
import { CarService} from './services/carservice';
import { HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        JavaComponent,
        AndroidComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        PanelModule,
        RouterModule.forRoot(routes)
    ],
    providers: [CarService],
    bootstrap: [AppComponent]
})
export class AppModule { }
