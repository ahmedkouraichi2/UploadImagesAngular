import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient){ }
  private url ='http://127.0.0:3000/';
  heros: any[] = [];

  createNewHero(hero: any){
   return   this.http.post(this.url+'hero/ajout',hero);
  }

  getAllHero(){
    return this.http.get(this.url +'hero/all');
  }
  deletewrap(id:any){
    return this.http.delete(this.url+'hero/supprimer/'+id);

  }

  getHeroById(id:any){
    return this.http.get(this.url +'hero/getbyid' +id);
  }
  updateHero(id:any,hero:any){
    return this.http.put(this.url+'hero/update',hero)
  }

  
} 
