import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";
import { useState } from "react";
import style from './EditarProdutos.module.css';

export default function EditarProdutos() {
  const { id } = useParams();
  document.title = "EDITAR PRODUTOS " + id;
  const navigate = useNavigate();

  const produtoRetornadoDoFiltro = listaProdutos.filter(
    (produto) => produto.id == id
  )[0];

  const [produto, setProduto] = useState({
    id: produtoRetornadoDoFiltro.id,
    nome: produtoRetornadoDoFiltro.nome,
    desc: produtoRetornadoDoFiltro.desc,
    preco: produtoRetornadoDoFiltro.preco,
    img: produtoRetornadoDoFiltro.img,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    listaProdutos.forEach((item, index) => {
      if (item.id == id) {
        indice = index;
      }
    });
    listaProdutos.splice(indice, 1, produto);
    navigate("/produtos");
  };

  return (
    <div className={style.editarProdutosContainer}>
      <div>
        <h1>Editar Produtos</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <input type="hidden" name="id" value={produto.id} />
            <div className={style.formField}>
              <label htmlFor="idProd">Nome do Produto:</label>
              <input
                type="text"
                name="nome"
                id="idProd"
                onChange={handleChange}
                value={produto.nome}
              />
            </div>
            <div className={style.formField}>
              <label htmlFor="idDesc">Descrição:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={handleChange}
                value={produto.desc}
              />
            </div>
            <div className={style.formField}>
              <label htmlFor="idPreco">Preço:</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                onChange={handleChange}
                value={produto.preco}
              />
            </div>
            <div className={style.formField}>
              <button type="submit" className={style.editButton}>EDITAR</button>
            </div>
          </fieldset>
        </form>
        <div className={style.dataSection}>
          <h2>Dados do Produto</h2>
          <table className={style.productTable}>
            <tbody>
              <tr>
                <td className={style.dataTitle}>Nome:</td>
                <td>{produto.nome}</td>
              </tr>
              <tr>
                <td className={style.dataTitle}>Descrição:</td>
                <td>{produto.desc}</td>
              </tr>
              <tr>
                <td className={style.dataTitle}>Preço:</td>
                <td>{produto.preco}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className={style.backButton} onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
}
