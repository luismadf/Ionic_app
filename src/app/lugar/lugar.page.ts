import { Component, OnInit } from "@angular/core";
import { PlacesService } from "./places.service";

@Component({
  selector: "app-lugar",
  templateUrl: "./lugar.page.html",
  styleUrls: ["./lugar.page.scss"],
})
export class LugarPage implements OnInit {
  places = [];
  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }
}
