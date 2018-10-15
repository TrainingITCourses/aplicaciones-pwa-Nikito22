import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LsBuscadorComponent } from './ls-buscador/ls-buscador.component';
import { LsBuscadorCriteriosComponent } from './ls-buscador/buscadorCriterios/buscadorCriterios.component';
import { LsBuscadorLanzamientosComponent } from './ls-buscador/buscadorLanzamientos/buscadorLanzamientos.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IsaEffects } from './store/isa.effects';

@NgModule({
    declarations: [
        AppComponent,
        LsBuscadorComponent,
        LsBuscadorCriteriosComponent,
        LsBuscadorLanzamientosComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production
            ? StoreDevtoolsModule.instrument()
            : [],
        EffectsModule.forRoot([IsaEffects]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    exports: [],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
