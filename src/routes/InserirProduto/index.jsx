import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { listaProdutos } from '../../components/listaProdutos';
import { useNavigate } from 'react-router-dom';
import style from './InserirProduto.module.css';

export default function InserirProduto() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    id: uuidv4(),
    nome: '',
    desc: '',
    preco: '',
    img: '',
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

    // Se houver erros, não adiciona o produto
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Adiciona o produto à lista e redireciona para a página de produtos
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
                {errors.nome && <p className={style.error}>{errors.nome}</p>}
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
                {errors.desc && <p className={style.error}>{errors.desc}</p>}
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
                {errors.preco && <p className={style.error}>{errors.preco}</p>}
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
                {errors.img && <p className={style.error}>{errors.img}</p>}
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
