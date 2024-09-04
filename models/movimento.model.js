//busca dos produto no banco de dados

const conexao = require('../database/connection.database');

async function getMovimento(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_movimentacao
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getMovimentoById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_movimentacao where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um produto no banco de dados
async function addMovimento(  
  tipo
 ){
      try{
    const[exec] = await conexao.query(`
     insert into tb_movimentacao(
     dt_mpvimento,
     tipo
     )values(current_timestamp,?
      )  
     `,[tipo] );

     if(exec.affectedRows==1){
      const [linha] = await conexao.query(`select last_insert_id() as id`);
      return linha[0];
     }


     return exec.affectedRowsS;
      }catch(erro){
        return erro;
      }
  
}


async function addItemMovimento(  movimentacao,quantidade,produto ){
  try{
    const[exec] = await conexao.query(`
     insert into tb_mov_item(

     movimentacao,
     produto,
     quantidade

     )values(?,?,? )  
     `,[movimentacao,produto,quantidade] );
     return exec.affectedRows;
    }catch(erro){
      return erro;
    }

}


//Função para buscar todos os usuários do banco

async function buscaTodosMovimento(){
  //estrutura de tentativa tr.catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
       select
         p.descricao,   
         m.dt_mpvimento as dt_movimento,
         p.valor, 
         m.tipo, 
         t.descricao as ds_tipo,
         mi.quantidade,
        (p.valor * mi.quantidade) as valor_total
        from tb_produto p
        inner join tb_mov_item mi on mi.produto = p.id
        inner join tb_movimentacao m on m.id = mi.movimentacao
        inner join tb_tipo t on t.id = m.tipo;
  
        
        
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getMovimento,
    getMovimentoById,
    addMovimento,
    buscaTodosMovimento,
    addItemMovimento
}
