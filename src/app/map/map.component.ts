import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public selectedCity = null;
  private map!: L.Map;

  public changeCity(): void {
    this.map.setView(this.selectedCity!,8)
  };
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [55.7504461, 37.6174943],
      zoom: 8
    });

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      
    });

    tiles.addTo(this.map);
  
  }

  cities = [
    {id:'0', name: 'Москва', map: [55.7504461, 37.6174943]},
    {id: '1', name: 'Тюмень', map: [57.1668968, 65.5152054]}
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.initMap();
    
  }
  
}