import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  average: number =  0;
  constructor(private SerieService: SerieService) { }

  getSeries(): void{
    this.SerieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAverage();
    });
  }

  getAverage(){
    let seasons: number = 0;
    let total_series: number = 0;
    for (let i=0; i <this.series.length;i++){
      seasons += this.series[i].seasons;
      total_series += 1;
    }
    this.average = Math.round(seasons/total_series);
  }

  ngOnInit() {
    this.getSeries();
  }

}
