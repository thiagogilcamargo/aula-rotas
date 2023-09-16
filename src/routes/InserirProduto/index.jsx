// InserirProduto.jsx
import React, { useState } from 'react';
import { listaProdutos } from '../../components/listaProdutos';
import { useNavigate } from 'react-router-dom';
import style from './InserirProduto.module.css';

export default function InserirProduto() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    id: listaProdutos.length + 1,
    nome: '',
    desc: '',
    preco: '',
    img: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    listaProdutos.push(produto);
    navigate('/produtos');
  };

  return (
    <div className={style.inserirProdutoContainer}>
      <div className={style.containerInserir}>
        <h1>Inserir Produto</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Novo Produto</legend>
              <div>
                <label htmlFor="idNome">Nome do Produto</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  onChange={handleChange}
                  value={produto.nome}
                  required
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  id="idDesc"
                  onChange={handleChange}
                  value={produto.desc}
                  required
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  id="idPreco"
                  onChange={handleChange}
                  value={produto.preco}
                  required
                />
              </div>
              <div>
                <label htmlFor="idImg">URL da Imagem</label>
                <input
                  type="text"
                  name="img"
                  id="idImg"
                  onChange={handleChange}
                  value={produto.img}
                  required
                />
              </div>
              <div className={style.buttonContainer}>
                <button type="submit">Inserir</button>
                <button type="button" onClick={() => navigate('/produtos')}>
                  Voltar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
