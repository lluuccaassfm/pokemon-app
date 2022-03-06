import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MediaQueryService {

  private _isMobile: boolean;
  private _isDesktop: boolean;

  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }
}
