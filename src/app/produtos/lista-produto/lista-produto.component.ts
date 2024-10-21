import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit{

  constructor(private produtoService: ProdutosService) {}

  public produtos: Produto[] = [];

  ngOnInit() {
      this.produtoService.obterProdutos()
        .subscribe({
          next: produtos => {
            this.produtos = produtos;
            console.log(produtos);
          },
          error: e => console.log(e)
      });
  }
}
