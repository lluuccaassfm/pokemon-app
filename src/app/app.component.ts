import { Component } from '@angular/core';
import { MediaQueryService } from "./services/media-query.service";
import { MediaChange, MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'pokemon-app';

  constructor(
    private media: MediaObserver,
    private mediaService: MediaQueryService,
  ) {
    this.media.asObservable().subscribe((medias: MediaChange[]) => {
      this.mediaService.isDesktop = !!medias.find(m => m.mqAlias === 'gt-xs');
      this.mediaService.isMobile = !!medias.find(m => m.mqAlias === 'lt-sm');
    });
  }


}
