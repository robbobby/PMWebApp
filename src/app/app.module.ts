import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home";
import { LoginComponent } from "./Login";
import { RegisterComponent } from "./Register";
import { appRoutingModule } from "./app.routing";
import { FakeBackEndInterceptor } from "./helpers";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule( {
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],

    bootstrap: [
        AppComponent,
    ],
    providers: [
        FakeBackEndInterceptor
    ]
})

export class AppModule {}