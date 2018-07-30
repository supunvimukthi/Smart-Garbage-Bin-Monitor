import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  distance:any;
  percent:number;
  color1:String;
  air:String;
  bins:any[];
  collectors:any[];
  lat: number = 51.678418;
  lng: number = 7.809007;

  color(distance:number){
    distance=25-distance;
    if((distance/25*100)>90){return "#c00000"}
    else if((distance/25*100)>70){return "#c04200"}
    else if((distance/25*100)>50){return "#c08400"}
    else if((distance/25*100)>30){return "#c0c000"}
    else{return "#76c000"}
  }

  constructor(db: AngularFireDatabase) {
          
    db.list('/').valueChanges()
      .subscribe(bins=>{
        this.bins=bins;
        
        console.log(bins)
      })
      db.list('/collectors').valueChanges()
      .subscribe(collector=>{
        this.collectors=collector;
        
        console.log(this.collectors)
      })
    }
    
}

