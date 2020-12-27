import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Eiffel Tower",
      imageURL:
        "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/original/original--be02-c1fd3a0d4839ocio-curiosidades-torre-eiffel-reproducciones-12728614-1-esl-es-reproducciones-jpg.jpg",
      comments: ["Awesome place", "Wonderfull Experience"],
    },
    {
      id: "2",
      title: "Statue of Liberty",
      imageURL:
        "https://www.newyorkando.com/wp-content/uploads/sites/7/2020/09/ESTATUA-DE-LA-LIBERTAD-de-frente-AHM.jpg",
      comments: ["Awesome place", "Wonderfull Experience"],
    },
    {
      id: "3",
      title: "El Retiro Park",
      imageURL:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/e6/bf/caption.jpg?w=1000&h=-1&s=1",
      comments: [],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + "",
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }
}
