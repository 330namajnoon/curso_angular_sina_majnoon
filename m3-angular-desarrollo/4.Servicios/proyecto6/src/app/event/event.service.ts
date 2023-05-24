import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(this.url);
  }

  findById(id: number): Observable<IEvent> {
    // https://jsonplaceholder.typicode.com/todos/4
    return this.httpClient.get<IEvent>(`${this.url}/${id}`);
  }

  // findAllByCompletedTrue() 
  // Con 1 parámetro: ?completed=true
  // Con 1 parámetro: ?param1=value1&param2=value2
  findAllByCompletedTrue(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=true`);
  }

  findAllByCompletedFalse(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=false`);
  }

  // create: Crear un nuevo objeto TODO Event en el servidor
  create(event :IEvent): Observable<IEvent> {
    return this.httpClient.post<IEvent>(this.url, event);
  }


  // update
  update(event: IEvent): Observable<IEvent> {
    return this.httpClient.put<IEvent>(`${this.url}/${event.id}`, event);
  }

  // deleteById
  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }

}
