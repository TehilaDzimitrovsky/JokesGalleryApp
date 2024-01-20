import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private jsonUrl = 'assets/jokes-json.json';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any[]> {
    return this.http.get<Joke[]>(this.jsonUrl);
  }

  getRandomJokesByType(type?: string, data?: Joke[]): Joke[] {
    const sameTypeJokes = data?.filter((joke) => joke.type === type);
    const randomJokes = this.getRandomJokes(sameTypeJokes).slice(0, 3);
    return randomJokes;
  }

  private getRandomJokes(array?: Joke[]): Joke[] {
    if (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    else
    return [];
  }
}
