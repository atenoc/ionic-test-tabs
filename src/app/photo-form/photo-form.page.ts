import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.page.html',
  styleUrls: ['./photo-form.page.scss'],
})
export class PhotoFormPage implements OnInit {

  file:File
  photoSelected: string | ArrayBuffer

  titulo:String
  descripcion:string

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  fotoSeleccionada(event:HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      //vista previa
      const reader = new FileReader()
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirFoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement){
    
    this.photoService.createPhoto(titulo.value, descripcion.value, this.file)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabs/tab1'])
          console.log("Registro guardado")
      }, 
        err => {
          console.log(err)
      });

    return false;
  }

}
