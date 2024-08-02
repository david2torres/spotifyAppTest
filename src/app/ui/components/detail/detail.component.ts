import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() item!: any;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('DETAIL', this.item)
  }
}
