var express = require('express');
var router = express.Router();
const sql = require('../models/movimento.model')

/* GET users listing. */

router.get('/movimento', function(req, res, next) {
 sql.getMovimento().then((resposta)=>{
    if(resposta instanceof Error){  
      res.status(500).send(resposta);
      return;   

    }
      
    res.status(200).json(resposta);

 })
});

router.get('/movimento/:id', function(req, res, next) {
  sql.getMovimentoById(req.params.id).then((resposta)=>{
     if(resposta instanceof Error){  
       res.status(500).send(resposta);
       return;   
 
     }
       
     res.status(200).json(resposta);
 
  })
 });

 //insere um usuário no banco de dados

 router.post('/movimento',function(req,res){
    let info = req.body;
    sql.addMovimento(
      info.tipo
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

sql.addMovimento(dados.tipo).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    console.log(resposta)
    sql.addItemMovimento(resposta.id,dados.quantidade,dados.produto).then((resposta2)=>{
      if(resposta2 instanceof Error){
        res.status(500).json(resposta2);
        return;
      }
      res.status(201).json(resposta2);
    })
  })
 })


 //rota para buscar todos os materal 

 router.get('/buscaTodos',(req,res)=>{
   sql.buscaTodosMovimento().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
   
    res.status(200).json(resposta);

   })
 })




module.exports = router;

