import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ISearchSpotify } from 'src/app/core/domain/interfaces/searchResponse.interface';
import { SpotifyService } from 'src/app/core/infrastructure/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  searchForm: FormGroup;
  private _unSubscribe = new Subject<void>();
  public results!: ISearchSpotify[];
  public totalResults: number = 0;
  public currentPage: number = 0;
  public pageSize: number = 20;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spotifyService: SpotifyService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
      type: ['track'],
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.search();
  }

  public search() {
    const { query, type } = this.searchForm.value;
    this.spotifyService
      .search(query, type, this.currentPage * this.pageSize, this.pageSize)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((data) => {
        this.results = data[type + 's'].items;
        this.totalResults = data[type + 's'].total;
      });
  }

  public onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.search();
  }

  public redirectToDetail(type: string, id: string): void {
    this.router.navigate([`/detail/${type}/${id}`]);
  }

  ngOnDestroy(): void {
    this._unSubscribe.complete();
    this._unSubscribe.next();
  }
}
