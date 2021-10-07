import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {HomeComponent} from "./Home";
import {LoginComponent} from "./Login";
import {RegisterComponent} from "./Register";

@NgModule( {
    imports: [BrowserModule],
    declarations: [AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}