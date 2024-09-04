//busca dos cadastro no banco de dados

const conexao = require('../database/connection.database');

async function getCadastro(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_pomar
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getCadastroById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_pomar where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um cadastro no banco de dados
async function addCadastro(  apelido,num_linhas,num_colunas ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_pomar(
       apelido,
       num_linhas,
       num_colunas
       )values(?,?,?)  
       `,[apelido,num_linhas,num_colunas,] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;
    
     }

}


//Função para buscar todos os usuários do banco

async function buscaTodosCadastro(){
  //estrutura de tentativa try..catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
        
        
        select
         id,
         apelido,
         num_linhas,
         num_colunas
       from tb_pomar;
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getCadastro,
    getCadastroById,
    addCadastro,
    buscaTodosCadastro
}