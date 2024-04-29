import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { HobbiesDetailComponent } from '../hobbies-detail/hobbies-detail.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  public dialog: MatDialog = inject(MatDialog)
  hobbies = [
    {
      name: 'Cubo de Rubik',
      introduccion: "El cubo de Rubik es un rompecabezas mecánico tridimensional creado por el escultor y profesor de arquitectura húngaro Ernő Rubik en 1974.",
      link_foto: 'https://s2.dmcdn.net/v/M2G6j1Vh1vLF1BPsa/x1080',
      link_foto_detail: 'https://i.ytimg.com/vi/BcDih_sjBUM/maxresdefault.jpg',
    },
    {
      name: 'Ajedrez',
      introduccion: "El ajedrez es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de dieciséis piezas móviles, desiguales en importancia y valor, que se desplazan sobre un tablero capturando piezas del jugador contrario, según ciertas reglas.​",
      link_foto: 'https://www.smartick.es/blog/wp-content/uploads/2023/07/Tablero-de-ajedrez-azul.png',
      link_foto_detail: 'https://images.ecestaticos.com/1k0zhBDYHNndwF-S5-V1KzeFD4E=/2x75:1720x1041/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd8d%2Fb67%2Fb66%2Fd8db67b66d090764465afa568c239335.jpg',
    },
    {
      name: 'Programacion',
      introduccion: "La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.",
      link_foto: 'https://duglasm.files.wordpress.com/2012/10/lenguaje-de-programacic3b3.jpg',
      link_foto_detail: 'https://desarrollarinclusion.cilsa.org/wp-content/uploads/2017/06/binary-system-557601_960_720.jpg',
    },    
    {
      name: 'Automovilismo',
      introduccion: "El automovilismo es el deporte que se practica con automóviles. En la mayoría de las modalidades, los automóviles deben completar un recorrido en el menor tiempo posible, o bien recorrer un circuito la mayor cantidad de veces en un tiempo fijo.",
      link_foto: 'https://is-ak.bnm.pl/04/o/o/31/5170207.jpg?v=1689773126',
      link_foto_detail: 'https://cloudfront-us-east-1.images.arcpublishing.com/prisaradiomx/NLPB2RR655PILES74OHNU2AXVM.jpg',
    },
    {
      name: 'Videojuegos',
      introduccion: "Un videojuego es una forma interactiva de entretenimiento digital que permite a los jugadores sumergirse en mundos virtuales, controlar personajes y enfrentarse a desafíos diversos mientras exploran narrativas, resuelven acertijos y compiten con otros jugadores",
      link_foto: 'https://i.pinimg.com/originals/47/69/2f/47692f66878161bf2e03f05712ae5a75.gif',
      link_foto_detail: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/07/357752-pelicula-space-invaders-esta-planes-warner-bros.png?tf=3840x',
    },
  ]
  
  openDialog(hobbie:any) {
    this.dialog.open(HobbiesDetailComponent, {
      data: {
        hobbie,
      },
    });
  }
}
