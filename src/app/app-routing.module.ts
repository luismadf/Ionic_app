import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "lugar",
    pathMatch: "full",
  },
  {
    path: "lugar",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./lugar/lugar.module").then((m) => m.LugarPageModule),
      },
      {
        path: ":placeId",
        loadChildren: () =>
          import("./lugar/place-detail/place-detail.module").then(
            (m) => m.PlaceDetailPageModule
          ),
      },
    ],
  },
  {
    path: "place-add",
    loadChildren: () =>
      import("./lugar/place-add/place-add.module").then(
        (m) => m.PlaceAddPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
