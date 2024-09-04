var express = require('express');
var router = express.Router();
const sql = require('../models/cadastro.model')

/* GET users listing. */

router.get('/cadastro', function(req, res, next) {
 sql.getCadastro().then((resposta)=>{
    if(resposta instanceof Error){  
      res.status(500).send(resposta);
      return;   

    }
      
    res.status(200).json(resposta);

 })
});

router.get('/cadastro/:id', function(req, res, next) {
  sql.getCadastroById(req.params.id).then((resposta)=>{
     if(resposta instanceof Error){  
       res.status(500).send(resposta);
       return;   
 
     }
       
     res.status(200).json(resposta);
 
  })
 });

 //insere um usuário no banco de dados

 router.post('/cadastro',function(req,res){
    let info = req.body;
    sql.addCadastro(
        info.apelido,
        info.num_linhas,
        info.num_colunas,
   

    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(201).json(resposta);
    })
 })


 //Adiciona o usuário

 router.post('/add',(req,res)=>{
//Guarda as infoemações em uma variavel para 
//Facilitar o acesso
let dados = req.body.info;
console.log(dados)
   sql.addCadastro(
    dados.apelido,
    dados.num_linha,
    dados.num_coluna,
    
   ).then((resposta)=>{
    console.log(resposta)
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
     }
     res.status(201).json(resposta);
   })
 })

 //rota para buscar todos os materal 

 router.get('/buscaTodos',(req,res)=>{
   sql.buscaTodosCadastro().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
   
    res.status(200).json(resposta);

   })
 })




module.exports = router;

