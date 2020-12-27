import { Component, OnInit } from "@angular/core";
import { PlacesService } from "./places.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-lugar",
  templateUrl: "./lugar.page.html",
  styleUrls: ["./lugar.page.scss"],
})
export class LugarPage implements OnInit {
  places = [];
  constructor(private placeService: PlacesService, private router: Router) {}

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }

  addNewPlace() {
    this.router.navigate(["/new-place"]);
  }

  goToHome() {
    console.log("work");
    this.router.navigate(["/home"]);
  }
}
