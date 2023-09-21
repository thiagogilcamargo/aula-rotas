import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import { listaProdutos } from '../../components/listaProdutos';
import { AiFillEdit as Editar, AiOutlineDelete as Excluir } from 'react-icons/ai';
import classes from './Produto.module.css';

export default function Produtos() {
  document.title = 'Lista de Produtos';

  const [exemplo, setExemplo] = useState([{}]);
  const [count, setCount] = useState(0);

  function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }

  useEffect(() => {
    console.log('Use-Effect que será sempre renderizado!');
  });

  useEffect(() => {
    console.log('Use-Effect que será renderizado apenas 1 vez!');
    setExemplo(listaProdutos);
  }, []);

  useEffect(() => {
    console.log(
      'Use-Effect que será renderizado quando o objeto ou componente ou elemento que está no array de dependências sofrer atualização.'
    );
  }, [count]);

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>

      <div>
        <button className="counterButton" onClick={() => setCount(count + 1)}>
          COUNTER - {count}
        </button>
      </div>

      <div>
        


        <table className={classes.tableStyle}>
          <thead>
            <tr className={classes.tableHeaderStyle}>
              <th className={classes.tableHeaderStyle}>ID</th>
              <th className={classes.tableHeaderStyle}>Nome</th>
              <th className={classes.tableHeaderStyle}>Descrição</th>
              <th className={classes.tableHeaderStyle}>Preço</th>
              <th className={classes.tableHeaderStyle}>Imagem</th>
              <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {exemplo.map((produto, index) => (
              <tr key={index} className={classes.tableLineStyle}>
                <td className={classes.tableDataStyle}>{produto.id}</td>
                <td className={classes.tableDataStyle}>{produto.nome}</td>
                <td className={classes.tableDataStyle}>{produto.desc}</td>
                <td className={classes.tableDataStyle}>{formatPrice(produto.preco)}</td>
                <td className={classes.tableDataStyle}>
                  <img src={produto.img} alt={produto.desc} />
                </td>
                <td className={classes.tableDataStyle}>
                  <Link to={`/editar/produtos/${produto.id}`}>
                    <Editar />
                  </Link>{' '}
                  |{' '}
                  <Link to={`/excluir/produtos/${produto.id}`}>
                    <Excluir />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className={classes.tableDataStyle}>
                Total de Produtos: {listaProdutos.length}
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
      {' '}
        <Link to="/inserir/produto" className={classes.linkInserirNovoProduto}>Inserir Novo Produto</Link>
    </div>
  );
}
