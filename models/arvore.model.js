//busca dos arvore no banco de dados

const conexao = require('../database/connection.database');

async function getArvore(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_arvore
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getArvoreById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_arvore where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um arvore no banco de dados
async function addArvore(defensivo,fertilizando,ultima_verif,linha,coluna,tipo,situacao,pomar ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_arvore(
       defensivo,
       fertilizando,
       ultima_verif,
       linha,
       coluna,
       tipo,
       situacao,
       pomar
       )values(?,?,?,?,?,?,?,?)  
       `,[     defensivo,fertilizando,ultima_verif,linha,coluna,tipo,situacao,pomar] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;
    
     }

}


//Função para buscar todos os usuários do banco

async function buscaTodosArvore(){
  //estrutura de tentativa try..catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
        
        
        select
         id,
           defensivo,
       fertilizando,
       ultima_verif,
       linha,
       coluna,
       tipo,
       situacao,
       pomar
       from tb_arvore;
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getArvore,
    getArvoreById,
    addArvore,
    buscaTodosArvore
}