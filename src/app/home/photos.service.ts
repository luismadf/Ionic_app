import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    this.http.get("https://jsonplaceholder.typicode.com/photos?_limit=15");
  }
}
