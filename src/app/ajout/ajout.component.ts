import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
 
  hero ={
    name:'',
    power:0,
  }
  image:any;
  constructor(private _shared:HeroService) { }
  

  ngOnInit(): void {
  }
  update(){
    
  }
  ajoute(){
    let formData = new FormData()
    formData.append('name',this.hero.name)
    formData.append('power',this.hero.power.toString())
    formData.append('image',this.image)
    this._shared.createNewHero(formData).subscribe(
       res=> {
        console.log(this.hero);
       },
        err=>{
          console.log(err)
        }
    )
  }

  selectedImage(e:any){
    this.image = e.targe.files[0];
     console.log(this.image);

  }



}
