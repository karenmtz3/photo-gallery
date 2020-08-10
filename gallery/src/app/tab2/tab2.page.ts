import { Component } from '@angular/core';
import { PhotoService } from './../services/photo.service';
import { Photo } from './../models/photo.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public photos: Photo[] = [];

  constructor(private PhotoService: PhotoService) { }

  ngOnInit(){
    this.PhotoService.loadSaved().then(() => {
      this.photos = this.PhotoService.getPhotos();
    });
  }

  public newPhoto(): void{
    this.PhotoService.addNewToGallery();
  }
}
