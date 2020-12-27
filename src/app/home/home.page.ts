import { Component } from "@angular/core";
import { PhotosService } from "./photos.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private photoService: PhotosService) {}

  photos = [];
  photosUrl = "https://picsum.photos/350/200";

  ngOnInit() {
    this.photoService.getPhotos().subscribe((data) => {
      this.photos = data;
    });
  }
}
