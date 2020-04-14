import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
import { from } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.loadmap();
  }

  async loadmap(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map= new google.maps.Map(mapEle, {
     center: myLatLng,
     zoom:12,
     title:'estoy aqui'
    });
  }
 
}
