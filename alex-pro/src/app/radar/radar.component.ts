import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  cnt: number;
  url: string;
  str: string;
  msg: string;
  root = 'https://weather.gc.ca/data/radar/temp_image/WKR/WKR_PRECIP_RAIN_';
  images: string[] = [' ', ' ', ' ', ' ', ' ', ' ', ' '];

  constructor() {}

  ngOnInit() {
    const d0 = new Date();
    d0.setUTCMinutes(d0.getUTCMinutes() - (d0.getUTCMinutes() % 10));

    for (const i in this.images) {
      if (this.images.hasOwnProperty(i)) {
        d0.setUTCMinutes(d0.getUTCMinutes() - 10);
        const d1 = formatDate(d0, 'yyyy_MM_dd_HH_mm', 'en-US', 'UTC').toString();
        this.images[i] = `${this.root}${d1}.GIF`.toString();
      }
    }

    const source = timer(0, 200);

    source.subscribe(val => {
      this.cnt = 6 - (val % 7);
      this.url = this.images[this.cnt];
    });
  }
}
// https://www.sitepoint.com/frame-by-frame-animation-css-javascript/
