import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBird } from 'src/models/bird.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IArea } from 'src/models/area.model';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  baseApi = 'http://localhost:54867/api/';
  url: string;
  constructor(private http: HttpClient, private router: Router) { }

  getListOfbirds(): Observable<IBird[]> {
    this.url = this.baseApi + 'bird';
    return this.http.get<IBird[]>(this.url);
  }
  addBird(bird): Observable<number> {
    this.url = this.baseApi + 'bird';
    return this.http.post<number>(this.url, bird);
  }
  addSpot(spot): Observable<number> {
    this.url = this.baseApi + 'spot';
    return this.http.post<number>(this.url, spot);
  }
  addArea(area): Observable<number> {
    this.url = this.baseApi + 'area';
    return this.http.post<number>(this.url, area);
  }
  navToBirdList() {
    const url = 'home/birdList';
    this.router.navigate([url]);
  }

  getAllAreas(): Observable<IArea[]> {
      this.url = this.baseApi + 'area';
      return this.http.get<IArea[]>(this.url);
  }
}
