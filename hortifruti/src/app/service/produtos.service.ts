import { Injectable } from '@angular/core';
import { Produto } from "../model/Produto"
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos(){
    return this.http.get('http://31.220.57.121:9080/produtos/')
  }
  postProduto(produto: Produto){
    return this.http.post('http://31.220.57.121:9080/produtos/', produto)
  }
  putProduto(produto: Produto){
    return this.http.put('http://31.220.57.121:9080/produtos/', produto)
  }
  getByIdProduto(id:number){
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }
}
