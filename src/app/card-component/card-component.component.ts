import { Component, OnInit,Input } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
tool:any;

  constructor(db: AngularFireDatabase) {
    db.object('/PIR').valueChanges()
    .subscribe(parking=>{
        this.tool=parking;
    } )   
    
}
   

  ngOnInit() {

  }

}
