import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { catchError, from, Observable, throwError } from 'rxjs';
import { APP_CONSTANTS } from '../../domain/constants/app.constants';
import { TSearch } from '../../domain/types/soptify.types';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private spotifyApi = new SpotifyWebApi();

  constructor() {
    const token = localStorage.getItem(APP_CONSTANTS.session);
    if (token) {
      this.spotifyApi.setAccessToken(token);
    }
  }

  search(
    query: string,
    type: TSearch,
    offset: number = 0,
    limit: number = 20
  ): Observable<any> {
    return from(this.spotifyApi.search(query, [type], { offset, limit })).pipe(
      catchError(this.handleError)
    );
  }

  getTrack(id: string): Observable<any> {
    return from(this.spotifyApi.getTrack(id)).pipe(
      catchError(this.handleError)
    );
  }

  getArtist(id: string): Observable<any> {
    return from(this.spotifyApi.getArtist(id)).pipe(
      catchError(this.handleError)
    );
  }

  getAlbum(id: string): Observable<any> {
    return from(this.spotifyApi.getAlbum(id)).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Un error ha Ocurrido:', error);
    return throwError(
      () => new Error('Algo salio mal. porfavor intenta de nuevo')
    );
  }
}
