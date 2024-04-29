import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HobbiesDetailComponent } from './hobbies-detail/hobbies-detail.component';
import { ComidasComponent } from './comidas/comidas.component';
import { ComidasDetailComponent } from './comidas-detail/comidas-detail.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ArtistasDetailComponent } from './artistas-detail/artistas-detail.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicaDetailComponent } from './musica-detail/musica-detail.component';


export const routes: Routes = [

   {
      path: 'inicio',
      component: InicioComponent
   },
   {
      path: 'hobbies',
      component: HobbiesComponent
   },
   {
      path: 'hobbies/:id',
      component: HobbiesDetailComponent
   },
   {
      path: 'comidas',
      component: ComidasComponent
   },
   {
      path: 'comidas/:id',
      component: ComidasDetailComponent
   },
   {
      path: 'artistas',
      component: ArtistasComponent
   },
   {
      path: 'artistas/:id',
      component: ArtistasDetailComponent
   },
   {
      path: 'series',
      component: SeriesComponent
   },
   {
      path: 'series/:id',
      component: SeriesDetailComponent
   },
   {
      path: 'musica',
      component: MusicaComponent
   },
   {
      path: 'musica/:id',
      component: MusicaDetailComponent
   },
   {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'prefix'
   }

];  