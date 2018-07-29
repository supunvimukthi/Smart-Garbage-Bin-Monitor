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

  color(distance:number){
    if((distance/125*100)>90){return "#c00000"}
    else if((distance/125*100)>70){return "#c04200"}
    else if((distance/125*100)>50){return "#c08400"}
    else if((distance/125*100)>30){return "#c0c000"}
    else{return "#76c000"}
  }

  constructor(db: AngularFireDatabase) {
    db.object('/distance').valueChanges()
    .subscribe(distance=>{
        this.distance=distance;
        this.percent=Number(this.distance)/125*100
       

        
    } )
      
    db.list('/bins').valueChanges()
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

