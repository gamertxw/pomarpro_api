//busca dos produto no banco de dados

const conexao = require('../database/connection.database');

async function getProduto(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_produto
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getProdutoById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_produto where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um produto no banco de dados
async function addProduto(  descricao,unidade_medida,tipo_id,valor ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_produto(
       descricao,
       unidade_medida,
       tipo_id,
       valor
       )values(?,?,?,? )  
       `,[descricao,unidade_medida,tipo_id,valor] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;S
    
     }

}


//Função para buscar todos os usuários do banco

async function buscaTodosProduto(){
  //estrutura de tentativa try..catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
        
        
        select
         id,
         descricao,
         unidade_medida,
         tipo_id,
         valor
       from tb_produto;
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getProduto,
    getProdutoById,
    addProduto,
    buscaTodosProduto
}