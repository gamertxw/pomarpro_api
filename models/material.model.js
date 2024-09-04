//busca dos material no banco de dados

const conexao = require('../database/connection.database');

async function getMaterial(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_material
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getMaterialById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_material where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um material no banco de dados
async function addMaterial(  nome,valor,tipo,fornecedor ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_material(
       nome,
       valor,
       tipo,
       fornecedor
       )values(?,?,?,? )  
       `,[nome,valor,tipo,fornecedor] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;
    
     }

}


//Função para buscar todos os usuários do banco

async function buscaTodosMaterial(){
  //estrutura de tentativa try..catch para
  //capturar erros
  try{
    let[linhas] = await conexao.query(`
         
        
        
        select
         id,
         nome,
         valor,
         tipo,
         fornecedor
         
       from tb_material;
      `)

      //retorna valores buscados do banco 
      return linhas;

  }catch(e){
    //retorna o erro que aconteceu
    return e;

  }
}




module.exports = {
    getMaterial,
    getMaterialById,
    addMaterial,
    buscaTodosMaterial
}