import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ArtistasDetailComponent } from '../artistas-detail/artistas-detail.component';
@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss'
})
export class ArtistasComponent {
  public dialog: MatDialog = inject(MatDialog)
  artistas = [
    {
      name: 'Leonardo DiCaprio',
      edad: 49,
      Estatura: '1,83 metros (6 pies)',
      Nacimiento: '11 de noviembre de 1974',
      Fallecimiento: 'Él aún camina entre nosotros',
      link_foto: 'https://hips.hearstapps.com/hmg-prod/images/evolucion-leonardo-dicaprio-17-1573498213.jpg?crop=0.563xw:1.00xh;0.269xw,0&resize=640:*',
      link_foto_detail: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg',
    },
    {
      name: 'Scarlett Johansson',
      edad: 39,
      Estatura: '1,60 metros (5 pies 3 pulgadas)',
      Nacimiento: '22 de noviembre de 1984',
      Fallecimiento: 'Él aún camina entre nosotros',
      link_foto: 'https://i.blogs.es/fb1dbc/scarlett-johansson/450_1000.jpeg',
      link_foto_detail: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Fscarlett-johansson-done-with-marvel-black-widow-001.jpg?cbr=1&q=90',
    },
    {
      name: 'Tom Hanks',
      edad: 67,
      Estatura: '1,83 metros (6 pies)',
      Nacimiento: '9 de julio de 1956',
      Fallecimiento: 'Él aún camina entre nosotros',
      link_foto: 'https://hollywoodlife.com/wp-content/uploads/2021/01/tom-hanks-then-and-now-ap-images-3.jpg',
      link_foto_detail: 'https://www.usmagazine.com/wp-content/uploads/2023/05/Tom-Hanks-Thinks-He-Could-Star-in-Movies-Posthumously-With-AI-Technology-inline.jpg?w=800&h=1421&crop=1&quality=86&strip=all',
    },
    {
      name: 'Dean Stockwell',
      edad: '85',
      Estatura: '1,75 metros (5 pies 9 pulgadas)',
      Nacimiento: '5 de marzo de 1936',
      Fallecimiento: '7 de noviembre de 2021',
      link_foto: 'https://static.independentespanol.com/2021/11/09/08/GettyImages-812336.jpg',
      link_foto_detail: 'https://ew.com/thmb/3PL2RyRNbh1npeMSPs4ICieS9aY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-159818528-2000-47621e5595ab4f5fb1b7a7039bf51224.jpg',
    },
    {
      name: 'Scott Bakula',
      edad: 69,
      Estatura: '1,83 metros (6 pies)',
      Nacimiento: '9 de octubre de 1954',
      Fallecimiento: 'Él aún camina entre nosotros',
      link_foto: 'https://assets.playbill.com/head-shots/scott-bakula.jpg',
      link_foto_detail: 'https://i.pinimg.com/1200x/61/2e/62/612e6258ab02fa6edfb4225213ef89fe.jpg',
    },
  ]

  openDialog(artista:any) {
    this.dialog.open(ArtistasDetailComponent, {
      data: {
        artista,
      },
    });
  }
}
