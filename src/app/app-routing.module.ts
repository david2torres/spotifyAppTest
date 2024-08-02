import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { SongDetailComponent } from './ui/pages/song-detail/song-detail.component';
import { ArtistDetailComponent } from './ui/pages/artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './ui/pages/album-detail/album-detail.component';
import { CallbackComponent } from './ui/pages/callback/callback.component';
import { PATHS_CONST } from './core/domain/constants/paths.constants';

const routes: Routes = [
  { path: PATHS_CONST.empty, component: HomeComponent },
  { path: PATHS_CONST.track, component: SongDetailComponent },
  { path: PATHS_CONST.artistId, component: ArtistDetailComponent },
  { path: PATHS_CONST.albumId, component: AlbumDetailComponent },
  { path: PATHS_CONST.callback, component: CallbackComponent },
  { path: PATHS_CONST.generic, redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
