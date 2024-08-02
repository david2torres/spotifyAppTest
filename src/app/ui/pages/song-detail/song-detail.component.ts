import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { REQUEST_CONST } from 'src/app/core/domain/constants/app.constants';
import { SpotifyService } from 'src/app/core/infrastructure/services/spotify.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongDetailComponent implements OnInit, OnDestroy {
  private _unSubscribe = new Subject<void>();

  song: any;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get(REQUEST_CONST.id);
    if (id) {
      this.spotifyService
        .getTrack(id)
        .pipe(takeUntil(this._unSubscribe))
        .subscribe((data) => {
          this.song = data;
        });
    }
  }

  ngOnDestroy(): void {
    this._unSubscribe.complete();
    this._unSubscribe.next();
  }
}
