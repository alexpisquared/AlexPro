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
  urls: string[] = [
    // '', '', '', '', '', '',   // 6
    // '', '', '', '', '', '',   // 12
    // '', '', '', '', '', '',   // 18
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]; // 24
  visurl: string;

  constructor() {}

  ngOnInit() {
    const d0 = new Date();
    d0.setUTCMinutes(d0.getUTCMinutes() - (d0.getUTCMinutes() % 10));

    for (const i in this.urls) {
      if (this.urls.hasOwnProperty(i)) {
        d0.setUTCMinutes(d0.getUTCMinutes() - 10);
        if (d0.getUTCMinutes() === 10 && d0.getUTCHours() === 17) {
          d0.setUTCMinutes(d0.getUTCMinutes() - 10);
        }
        const d1 = formatDate(d0, 'yyyy_MM_dd_HH_mm', 'en-US', 'UTC').toString();
        this.urls[i] = `${this.root}${d1}.GIF`.toString();
      }
    }

    const source = timer(0, 80);
    const max = this.urls.length + 4;

    source.subscribe(val => {
      this.cnt = max - (val % max) - 1;
      this.visurl = this.url = this.urls[this.cnt];
    });
  }
}
// https://www.sitepoint.com/frame-by-frame-animation-css-javascript/
