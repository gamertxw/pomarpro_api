//busca dos colheita no banco de dados

const conexao = require('../database/connection.database');

async function getColheita(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_colheita
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getColheitaById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_colheita where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um colheita no banco de dados
async function addColheita(  quantidade,dt_colheita,arvore ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_colheita(
       quantidade,
       dt_colheita,
       arvore
       )values(?,?,? )  
       `,[quantidade,dt_colheita,arvore] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;
    
     }

}


//Função para buscar todos os usuários do banco

async function buscaTodosColheita(){
  //estrutura de tentativa try..catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
        
        
        select
         id,
         quantidade,
         dt_colheita,
         arvore
       
       from tb_colheita;
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getColheita,
    getColheitaById,
    addColheita,
    buscaTodosColheita
}