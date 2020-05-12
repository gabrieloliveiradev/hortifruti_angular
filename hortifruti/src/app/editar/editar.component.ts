import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  produto: Produto = new Produto

  constructor(private produtosService:ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }
  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp;
    })
  }
  salvar(){
    this.produtosService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto=resp;
      this.router.navigate(['/produtos'])
      location.assign('/produtos')
    })
  }
}
