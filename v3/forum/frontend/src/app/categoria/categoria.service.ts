import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Categoria } from './categoria.model';

@Injectable()
export class CategoriaService {

  constructor(private http: Http) {
  }

  list(currentPage: number, itemsPerPage: number, filter: string, field: string = null, desc: boolean = false) {
    let start = (currentPage*itemsPerPage) - (itemsPerPage);
    let end = (currentPage*itemsPerPage) - 1;
    let orderQuery = '';
    if (field) {
      orderQuery = '&sort='+field+(desc?'&desc':'');
    }
    return this.http.get('~main/categorias?range='+start+'-'+end+filter+orderQuery)
      .map(res => res);
  }

  get(id: number) {
    return this.http.get('~main/categorias/' + id)
      .map(res => <Categoria>res.json());
  }

  create(categoria: Categoria) {
    return this.http.post('~main/categorias', categoria);
  }

  update(categoria: Categoria) {
    return this.http.put('~main/categorias/', categoria);
  }

  delete(categoria: Categoria) {
    return this.http.delete('~main/categorias/' + categoria.id);
  }
}
