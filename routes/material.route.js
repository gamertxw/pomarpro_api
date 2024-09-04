var express = require('express');
var router = express.Router();
const sql = require('../models/material.model')

/* GET users listing. */

router.get('/material', function(req, res, next) {
 sql.getMaterial().then((resposta)=>{
    if(resposta instanceof Error){  
      res.status(500).send(resposta);
      return;   

    }
      
    res.status(200).json(resposta);

 })
});

router.get('/material/:id', function(req, res, next) {
  sql.getMaterialById(req.params.id).then((resposta)=>{
     if(resposta instanceof Error){  
       res.status(500).send(resposta);
       return;   
 
     }
       
     res.status(200).json(resposta);
 
  })
 });

 //insere um usuário no banco de dados

 router.post('/material',function(req,res){
    let info = req.body;
    sql.addMaterial(
      info.nome,
      info.valor,
      info.tipo,
      info.fornecedor
   

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
   sql.addMaterial(
    dados.nome,
    dados.valor,
    dados.tipo,
    dados.fornecedor

    
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
   sql.buscaTodosMaterial().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
   
    res.status(200).json(resposta);

   })
 })




module.exports = router;

