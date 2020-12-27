import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Place } from "../place.model";
import { PlacesService } from "../places.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRouter: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get("placeId");
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: "Are you sure you want to delete this place?",
      message: "Be careful",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(["/lugar"]);
          },
        },
      ],
    });
    await alertElement.present();
  }
}
