import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './ui/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SongDetailComponent } from './ui/pages/song-detail/song-detail.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/infrastructure/interceptors/auth.interceptor';
import { ArtistDetailComponent } from './ui/pages/artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './ui/pages/album-detail/album-detail.component';
import { PlayerComponent } from './ui/components/player/player.component';
import { DetailComponent } from './ui/components/detail/detail.component';
import { AuthService } from './core/infrastructure/services/auth.service';
import { SpotifyService } from './core/infrastructure/services/spotify.service';
import { CallbackComponent } from './ui/pages/callback/callback.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SongDetailComponent,
    HomeComponent,
    ArtistDetailComponent,
    AlbumDetailComponent,
    PlayerComponent,
    DetailComponent,
    CallbackComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  providers: [
    AuthService,
    SpotifyService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
