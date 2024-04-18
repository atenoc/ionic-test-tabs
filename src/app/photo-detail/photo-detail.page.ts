import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../interfaces/Photo';
import { PhotoService } from '../services/photo.service';
import { NavController  } from '@ionic/angular'

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.page.html',
  styleUrls: ['./photo-detail.page.scss'],
})
export class PhotoDetailPage implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private navController:NavController 
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.photoService.getPhoto(this.id)   //volver a llamar los datos con el id recibido
        .subscribe(
          res => {
            this.photo = res;
            console.log(res)
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/tabs/tab2']);
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log("datos: "+this.photo._id, title.value, description.value)
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        //this.router.navigate(['/tabs/tab2']);
        this.navController.navigateRoot(['/tabs/tab1']);
        console.log("redirigiendo a tab1")
      });
    return false;
  }

}
