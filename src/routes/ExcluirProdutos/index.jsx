import { useNavigate, useParams } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos";
import style from './ExcluirProdutos.module.css';


export default function ExcluirProdutos() {

  document.title = "Excluir Produto"

  const { id } = useParams();
  const navigate = useNavigate();
  const produto = listaProdutos.filter((item) => item.id == id)[0];

  const handleDelete = () =>{

    let indice = listaProdutos.findIndex(item => item.id ==  produto.id);
    listaProdutos.splice(indice,1);
    alert("Produto excluído com sucesso!");
    navigate("/produtos");
 }

 return (
  <div className={style.containerExcluir}>
    <h1 className={style.cardTitle}>Excluir Produtos</h1>
    <div>
      <section className={style.cardExcluir}>
        <h2 className={style.cardTitle2}>Produto Selecionado para Exclusão</h2>
        <h3 className={style.alertMsg}>Você tem certeza de que deseja excluir esse produto?</h3>
        <figure>
          <img src={produto.img} alt={produto.desc} />
          <figcaption>
            {produto.nome} - R$ {produto.preco} 
          </figcaption>
        </figure>
        <button className={style.buttonExcluir} onClick={handleDelete}>Excluir</button>
        <button className={style.buttonCancelar} onClick={() => navigate("/produtos")}>Cancelar</button>
      </section>
    </div>
  </div>
)

}