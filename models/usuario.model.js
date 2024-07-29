//busca dos usuarios no banco de dados

const conexao = require('../database/connection.database');

async function getUsuarios(){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_usuario
 `)

 return linhas;
 }catch(erro){
return erro;

 }
}

//busca os usuraios pelo id
async function getUsuarioById(id){
  try{
  const[linhas] = await conexao.query(`
  select * from tb_usuario where id = ?
 `,[id])

 return linhas;
 }catch(erro){
return erro;

 }
}


//insere um usuario no banco de dados
async function addUsuario(
  nome,
  
  sobrenome,
  endereco,
  telefone,
  email,
  login,
  senha ){
    try{
      const[exec] = await conexao.query(`
       insert into tb_usuario(
       nome,sobrenome,endereco,
       telefone,email,
       login,senha
       )values(?,?,?,?,?,?,?
       )  
       `,[nome,sobrenome,endereco,telefone,email,login,senha] )
    
     return exec.affectedRowsS;
     }catch(erro){
     return erro;
    
     }

}


async function autenticaUsuario(usuario,senha){
  try{
  const[linha] = await conexao.query(`
  select 
        id
   from tb_usuario
     where 1=1
      and login = ?
      and senha = ?

 `,[usuario,senha])

 return linha;
 }catch(e){
return e;

 }
}



module.exports = {
    getUsuarios,
    getUsuarioById,
    addUsuario,
    autenticaUsuario

}