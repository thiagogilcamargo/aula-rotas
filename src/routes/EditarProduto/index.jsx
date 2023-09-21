import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";
import { useState } from "react";
import style from './EditarProdutos.module.css';

export default function EditarProdutos() {
  const { id } = useParams();
  document.title = "EDITAR PRODUTOS " + id;
  const navigate = useNavigate();

  const produtoRetornadoDoFiltro = listaProdutos.find(
    (produto) => produto.id === id
  );

  const [produto, setProduto] = useState({
    id: produtoRetornadoDoFiltro.id,
    nome: produtoRetornadoDoFiltro.nome,
    desc: produtoRetornadoDoFiltro.desc,
    preco: produtoRetornadoDoFiltro.preco,
    img: produtoRetornadoDoFiltro.img,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação dos campos
    const newErrors = {};
    if (!produto.nome) {
      newErrors.nome = 'O nome do produto é obrigatório.';
    }
    if (!produto.desc) {
      newErrors.desc = 'A descrição do produto é obrigatória.';
    }
    if (!produto.preco || isNaN(parseFloat(produto.preco))) {
      newErrors.preco = 'O preço deve ser um número válido.';
    }
    if (!produto.img) {
      newErrors.img = 'A URL da imagem é obrigatória.';
    }

    // Se houver erros, não atualiza o produto
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Encontra o índice do produto na lista
    const indice = listaProdutos.findIndex((item) => item.id === id);

    // Atualiza o produto na lista
    listaProdutos[indice] = produto;

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
              {errors.nome && <p className={style.error}>{errors.nome}</p>}
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
              {errors.desc && <p className={style.error}>{errors.desc}</p>}
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
              {errors.preco && <p className={style.error}>{errors.preco}</p>}
            </div>
            <div className={style.formField}>
              <label htmlFor="idImg">URL da Imagem:</label>
              <input
                type="text"
                name="img"
                id="idImg"
                onChange={handleChange}
                value={produto.img}
              />
              {errors.img && <p className={style.error}>{errors.img}</p>}
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
              <tr>
                <td className={style.dataTitle}>URL da Imagem:</td>
                <td>{produto.img}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className={style.backButton} onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
}
