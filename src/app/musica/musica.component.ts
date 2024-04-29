import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MusicaDetailComponent } from '../musica-detail/musica-detail.component';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.scss'
})
export class MusicaComponent {
  public dialog: MatDialog = inject(MatDialog)
  musicas = [
    {
      name: 'idfc - blackbear',
      artista: 'Blackbear',
      album: 'Deadroses',
      fecha_lanzamiento: '2015',
      genero: 'R&B/Soul',
      link_foto: 'https://images.genius.com/dd8bb5b3764aa233b2926b52c85bc5b0.1000x1000x1.jpg',
      link_foto_detail: 'https://pm1.aminoapps.com/6809/9dc903734fc2bf82cab8691482ec81b8018a8c42v2_00.jpg',
      link_musica: 'https://youtu.be/cDHiLpj_CBA?si=GsjMLwDcuYXhj5XU',
    },
    {
      name: 'Comics',
      artista: 'Caravan Palace',
      album: '<|°_°|>',
      fecha_lanzamiento: '2015',
      genero: 'Dance/Electrónica',
      link_foto: 'https://s.mxmcdn.net/images-storage/albums4/1/9/4/2/6/2/35262491_500_500.jpg',
      link_foto_detail: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/d9/3c/06d93c04-6d63-0846-bf57-28dec2ef4c6d/3663729098115_cover.jpg/800x800cc.jpg',
      link_musica: 'https://youtu.be/w6Qn_JB9I_8?si=vb2X5GZjIoz9Rcxd',
    },
    {
      name: 'Tacones rojos',
      artista: 'Sebastián Yatra',
      album: 'Dharma',
      fecha_lanzamiento: '2022',
      genero: 'Pop, Tropipop',
      link_foto: 'https://videoele.com/CancionEle/tacones-rojos-interactivo/Sebastian-yatra.jpg',
      link_foto_detail: 'https://radiorumba.fm/wp-content/uploads/2021/10/Tacones-Rojos-de-Sebastian-Yatra.jpg',
      link_musica: 'https://youtu.be/y-5eJaiviTk?si=qwcN6DkBYVycypiS',
    },
    {
      name: 'Another Love',
      artista: 'Tom Odell',
      album: "Qmusic Top 500 van de 10's",
      fecha_lanzamiento: '2013',
      genero: 'Indie pop, Indie rock, Pop',
      link_foto: 'https://i.scdn.co/image/ab67616d0000b2737fa661c701ba6bcf886e1beb',
      link_foto_detail: 'https://i.scdn.co/image/ab67616d0000b273aa3a29b802d02db863509fa3',
      link_musica: 'https://youtu.be/ixRLjjTRczE?si=3xcSGe63BiRehIzt',
    },
    {
      name: 'I like the way you kiss me',
      artista: 'Artemas',
      album: "i like the way you kiss me (remixes)",
      fecha_lanzamiento: '2024',
      genero: 'Alternativa/independiente, Pop',
      link_foto: 'https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8db248adf5884d1b97ffd04614a66590_1711701816~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1714316400&x-signature=J%2F4C6kFw8xMe0oeY2mxzhkb07GA%3D',
      link_foto_detail: 'https://source.boomplaymusic.com/group10/M00/03/22/2f8aba6b4c2844209c5438ec8bae12a5_464_464.jpg',
      link_musica: 'https://youtu.be/To7wHvDFu2M?si=4uXOtxigKybqiNPj',
    },
  ]
  openDialog(musica:any) {
    this.dialog.open(MusicaDetailComponent, {
      data: {
        musica,
      },
    });
  }
}
