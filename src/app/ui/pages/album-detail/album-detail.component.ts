import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { REQUEST_CONST } from 'src/app/core/domain/constants/app.constants';
import { SpotifyService } from 'src/app/core/infrastructure/services/spotify.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent implements OnInit {
  private _unSubscribe = new Subject<void>();
  public album: any;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get(REQUEST_CONST.id);
    if (id) {
      this.spotifyService
        .getAlbum(id)
        .pipe(takeUntil(this._unSubscribe))
        .subscribe((data) => {
          this.album = data;
        });
    }
  }

  ngOnDestroy(): void {
    this._unSubscribe.complete();
    this._unSubscribe.next();
  }
}
