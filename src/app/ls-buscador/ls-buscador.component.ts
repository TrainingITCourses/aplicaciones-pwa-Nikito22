import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, enTipoCriterio } from '../store/isa.reducer';
import { CambiarTipoCriterio, CambiarCriterio } from '../store/isa.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ls-buscador',
    templateUrl: './ls-buscador.component.html',
    styleUrls: ['./ls-buscador.component.css']
})
export class LsBuscadorComponent implements OnInit {

    public isa$: Observable<any>;
    public tiposCriterios = Object.keys(enTipoCriterio).slice(Object.keys(enTipoCriterio).length / 2);


    constructor(public store: Store<State>) { }

    ngOnInit() {
        this.isa$ = this.store.select('isa');
    }

    alCambiarTipoCriterio(event) {
        this.store.dispatch(new CambiarTipoCriterio(event.target.selectedIndex));
        this.store.dispatch(new CambiarCriterio(1)); // cargamos los lanzamientos del primer valor de los criterios
    }
}
