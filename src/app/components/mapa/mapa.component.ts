import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../class/marcador/marcador.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador [] = [];

  lat = -34.6131516;
  lng = -58.3772316;

  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {

    if ( localStorage.getItem('marcadores')) {

      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));

    }

   }

  ngOnInit() {
  }

  agregarMarcador(evento) {

    const coords: { lat: number , lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng );

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar' , {duration: 2000});
  }

    borrarMarcador(i: number) {

     this.marcadores.splice(i, 1);
     this.guardarStorage();

     this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 2000});

    }

    editarMarcador(marcador: Marcador) {

      const dialogRef = this.dialog.open( MapaEditarComponent, {
        width: '250px',
        data: {titulo: marcador.titulo , desc: marcador.descripcion}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          return;
        } else {
        marcador.titulo = result.titulo;
        marcador.descripcion = result.desc;
        }

        this.guardarStorage();

        this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 2000});
      });

    }
    guardarStorage() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
