import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../interfaces/Photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private router: Router) {
    console.log("Tab 1")
  }

  ngOnInit() {
    console.log("Lista de Productos")
    this.photoService.getPhotos()
    .subscribe(
      res => {
        this.photos = res;
      },
      err => console.log(err)
    )
  }

  selectedCard(id: string) {
    this.router.navigate(['tabs/photo-detail', id]);
    console.log("id: " +id)
  }
/*
  ionViewWillEnter(){
    console.log("Imágenes cargados por 2ra vez")
  }

  ionViewDidEnter(){
    console.log("entre a la vista")
  }*/

}
