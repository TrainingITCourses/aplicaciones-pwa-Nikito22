import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './store/isa.models';
import { CargarLanzamientos } from './store/isa.actions';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ejercicio 1 Nicolás Jiménez!';
  public isa$: Observable<any> = this.store.select('isa');

  constructor(public store: Store<State>, private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          console.log('current: ' + event.current.hash + '. Load new: ' + event.available.hash + ' ?');
          window.location.reload();
        }
      );
    }
  }

  ngOnInit() {
    this.store.dispatch(new CargarLanzamientos());
   }
}

