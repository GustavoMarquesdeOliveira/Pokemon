import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly http: HttpClient) { }
  public getPokemon(){
   return this.http.
   get<any>("https://pokeapi.co/api/v2/");
 }
}
