import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { SeriesDetailComponent } from '../series-detail/series-detail.component';
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  public dialog: MatDialog = inject(MatDialog)
  series = [
    {
      name: 'Quantum Leap',
      sinopsis: 'La serie sigue al Dr. Sam Beckett, quien viaja en el tiempo y se encuentra atrapado en la vida de diferentes personas, tratando de corregir errores históricos mientras intenta encontrar el camino de regreso a su propia línea temporal',
      personajes: ["Dr. Sam Beckett", "Al Calavicci"],
      link_foto: 'https://m.media-amazon.com/images/M/MV5BMDg1MWQzYmYtYTljMy00NDU3LWE1ZWItNWMzN2NlOTRkZjdmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_FMjpg_UX1000_.jpg',
      link_foto_detail: 'https://m.media-amazon.com/images/I/81lkaejsxyL._AC_UF894,1000_QL80_.jpg',
      link_video_trailer: 'https://www.youtube.com/watch?v=hRdebe65a9c',
    },
    {
      name: 'La Isla de Gilligan',
      sinopsis: 'Después de un naufragio, un grupo de siete personas queda varado en una isla desierta. La serie sigue sus intentos para ser rescatados, mientras enfrentan diversas situaciones cómicas y absurdas',
      personajes: ["Gilligan", "El Capitán Jonas Grumby (El Capitán)", "El Profesor Roy Hinkley", "La Señora Howell", "El Señor Howell", "Ginger Grant", "Mary Ann Summers"],
      link_foto: 'https://images.justwatch.com/poster/305761594/s332/temporada-2',
      link_foto_detail: 'https://images.justwatch.com/poster/305404902/s332/temporada-3',
      link_video_trailer: 'https://youtu.be/ygKGny5gi3k?si=F6j-XB0TPpScDqgE',
    },
    {
      name: 'Wonder Egg Priority',
      sinopsis: 'La historia sigue a Ai Ohto, quien recibe huevos misteriosos que contienen seres capaces de otorgar deseos. Junto con otras chicas, Ai se aventura en mundos oníricos para salvar a personas atrapadas y enfrentarse a sus propios traumas',
      personajes: ["Ai Ohto", "Neiru Aonuma", "Rika Kawai", "Momoe Sawaki", "Frill"],
      link_foto: 'https://ih1.redbubble.net/image.2258225255.3242/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      link_foto_detail: 'https://pics.filmaffinity.com/Wonder_Egg_Priority_Serie_de_TV-372216281-large.jpg',
      link_video_trailer: 'https://youtu.be/-C2gc6RKGCI?si=eLDwi-ybJ2QiEi8c',
    },
    {
      name: 'Scissor Seven',
      sinopsis: 'La serie sigue a Seven, un peluquero que en realidad es un asesino a sueldo. Utilizando sus habilidades de peluquería y destreza con las tijeras, se embarca en misiones secretas mientras enfrenta situaciones cómicas y de acción',
      personajes: ["Seven", "Thirteen", "Emperor", "Da Wu", "Xiao Fei", "Mrs. Zhi", "Li Zhi"],
      link_foto: 'https://pbs.twimg.com/media/F1Xd00RWwAE7Xf7?format=jpg&name=large',
      link_foto_detail: 'https://artworks.thetvdb.com/banners/v4/series/358612/posters/650addee9ac2a.jpg',
      link_video_trailer: 'https://youtu.be/nPobqV7dSMo?si=EKbG5dzdksVUCLk-',
    },
    {
      name: 'ALF',
      sinopsis: 'La serie sigue las travesuras de ALF, un alienígena peludo que se estrella en la Tierra y es acogido por la familia Tanner. Con su humor sarcástico, ALF causa problemas mientras la familia intenta ocultar su existencia a las autoridades',
      personajes: ["ALF", "Willie Tanner", "Kate Tanner", "Lynn Tanner", "Brian Tanner", "Trevor Ochmonek", "Raquel Ochmonek"],
      link_foto: 'https://shoutfactorytvlive.com/media_cache/userFiles/uploads/ALF/max2000/ALF-LiveSite_640x740_v2.jpg',
      link_foto_detail: 'https://m.media-amazon.com/images/I/41FoNREKtfL._AC_UF894,1000_QL80_.jpg',
      link_video_trailer: 'https://youtu.be/2znCQUJ7Bwk?si=dZI0dzQZlfZQglEE',
    },
  ]
  openDialog(serie:any) {
    this.dialog.open(SeriesDetailComponent, {
      data: {
        serie,
      },
    });
  }
}
