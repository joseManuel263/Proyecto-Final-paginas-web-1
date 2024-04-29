import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ComidasDetailComponent } from '../comidas-detail/comidas-detail.component';

@Component({
  selector: 'app-comidas',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './comidas.component.html',
  styleUrl: './comidas.component.scss'
})


export class ComidasComponent {
  public dialog: MatDialog = inject(MatDialog)
  comidas = [
    {
      name: 'Tacos al pastor',
      ingredientes: ['Tortillas de maíz', ' Carne de cerdo marinada', ' Achiote', ' Cebolla', ' Cilantro', ' Piña'],
      historia: 'Este icónico platillo mexicano tiene sus raíces en la influencia de la cocina árabe en México. La técnica de marinar la carne de cerdo y cocinarla en un trompo vertical fue introducida por inmigrantes libaneses en el siglo XIX',
      link_foto: 'https://i.blogs.es/92fc7c/como-preparar-carne-para-tacos-al-pastor-1-/1366_2000.jpg',
      link_foto_detail: 'https://www.shutterstock.com/image-photo/trompo-de-pastor-spinning-top-600nw-1702129570.jpg',
    },
    {
      name: 'Mole poblano',
      ingredientes:  ['Chiles', ' Especias', ' Chocolate', ' Pollo o pavo', ' Plátano macho', ' Almendras'],
      historia: 'El mole poblano es una mezcla de culturas, con influencias indígenas, europeas y africanas. Se dice que fue creado por monjas del convento de Santa Rosa en Puebla en el siglo XVII como un plato para agasajar al obispo local',
      link_foto: 'https://www.elsoldepuebla.com.mx/local/cjnre5-mole-poblano/ALTERNATES/LANDSCAPE_960/mole%20poblano',
      link_foto_detail: 'https://cdn7.kiwilimon.com/recetaimagen/21944/640x640/26440.jpg.webp',
    },
    {
      name: 'Tamales',
      ingredientes: ['Masa de maíz', ' Carne (pollo, cerdo, res)', ' Verduras', ' Chiles', ' Hojas de maíz', ' Caldo'],
      historia: 'Los tamales tienen una larga historia que se remonta a las civilizaciones mesoamericanas, donde eran un alimento básico. Se preparan desde hace miles de años y se han convertido en un elemento central de la gastronomía mexicana',
      link_foto: 'https://thefoodtech.com/wp-content/uploads/2024/02/tamales.jpg',
      link_foto_detail: 'https://i0.wp.com/www.turimexico.com/wp-content/uploads/2015/10/recetas-tamales.jpg?fit=1024%2C768&ssl=1',
    },
    {
      name: 'Chiles en nogada',
      ingredientes:  ['Chile poblano', ' Picadillo', ' Nuez', ' Granada', ' Perejil', ' Frutas (manzana, pera, plátano)'],
      historia: 'Este plato es una creación del México independiente y se dice que fue presentado por primera vez en el siglo XIX en Puebla para celebrar la victoria del ejército independentista de Agustín de Iturbide',
      link_foto: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5B1D3306-E933-46DF-A54A-EEDEBA750E34/Derivates/89E9127B-6326-4FAB-BE4D-ECB6947A3DC9.jpg',
      link_foto_detail: 'https://i0.wp.com/cucharamia.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-14-at-10.26.54.png?w=1200&ssl=1',
    },
    {
      name: 'Pozole',
      ingredientes: ['Maíz blanco (cacahuazintle)', ' Carne de cerdo o pollo', ' Chiles', ' Cebolla', ' Ajo', ' Lechuga'],
      historia: 'El pozole tiene sus raíces en la época prehispánica y era un platillo ritual en la cultura azteca. Se hacía con maíz y carne de humano sacrificado. Con la llegada de los españoles, la carne de cerdo sustituyó a la humana y se convirtió en un plato popular en todo México',
      link_foto: 'https://www.gastrolabweb.com/u/fotografias/m/2023/8/8/f608x342-50878_80601_5050.jpg',
      link_foto_detail: 'https://i2.wp.com/thesweetmolcajete.com/wp-content/uploads/2018/12/pozole-blanco.jpg?fit=733%2C1100&ssl=1',
    }
  ]

  openDialog(comida:any) {
    this.dialog.open(ComidasDetailComponent, {
      data: {
        comida,
      },
    });
  }
}
