import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {
  hero : any;
  id:any;
  constructor(private act :ActivatedRoute,private _shared:HeroService) { }
   update(){
     this._shared.updateHero(this.id,this.hero).subscribe(
       res=>{
        console.log(res);


       },
       err =>{
        console.log(err);

       }

     );

   }
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    
    this._shared.getHeroById(this.id).subscribe(
       res=>{
         this.hero = res;
       },
       err => {
        console.log(err);
       }
    )
  }

}
