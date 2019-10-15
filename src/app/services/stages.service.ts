import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { resolve } from 'url';

@Injectable({ providedIn: 'root' })

export class StagesService {

  private URL = 'https://localhost:3333/';

  constructor(public http : HttpClient) {
    console.log('Mano eu não sei o que eu tô fazendo');
  };

  authenticate(user: string, password: string){
    return new Promise((resolve, reject) => {
      var data = {
        user: user,
        password: password
      };

      this.http.post(this.URL + 'admin', data).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });
      
    });
  };

  list(){
    return new Promise((resolve, reject) => {

      this.http.get(this.URL).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });
      
    });
  };

  find(id: String){
    return new Promise((resolve, reject) => {

      this.http.get(this.URL + id).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });
      
    });
  };

  regist(stage: any){
    return new Promise((resolve, reject) => {

      this.http.post(this.URL + 'regist', stage).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });

    });
  };

  update(stage: any, id: string){
    return new Promise((resolve, reject) => {

      this.http.put(this.URL + 'update/' + id, stage).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });

    });
  };

  delete(id: string){
    return new Promise((resolve, reject) => {

      this.http.delete(this.URL + 'delete/' + id).subscribe((result: any) => {
        resolve(result.json());
      },
      (err) => {
        reject(err.json());
      });

    });
  };


}
