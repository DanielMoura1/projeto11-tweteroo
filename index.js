import express from 'express';

import cors from 'cors';

const app = express();
app.use(express.json());
const usuario=[]
let usuario1=''
const tweet=[]
let mensagens =[]
let caixa;
app.use(express.json());
app.use(cors());
app.post('/sign-up', (req, res) => {
    const us = req.body; // será o objeto { name: "Fulano" }
    usuario.push(us);
    usuario1 =us.avatar
    res.send("OK");
});
app.post('/tweets', (req, res) => {
    const tw = req.body; // será o objeto { name: "Fulano" }
   
    const ab ={
        username:  tw.username,
		avatar:  usuario1,
	    tweet: tw.tweet
    }
    tweet.push(ab);

    
    
    res.send("OK");
});
app.get("/tweets", (req,res) =>{
    let cont =0
    let i= tweet.length-1
   while(cont!=10){
    if(tweet[i]==undefined){
      cont=cont+1
      i=i-1
      
    }else{
    let caixa={
        username:  tweet[i].username,
		avatar: tweet[i].avatar,
	    tweet: tweet[i].tweet
    }
    mensagens.push(caixa)
    cont = cont+1
    i=i-1}
}

console.log(mensagens)   
res.send(mensagens);
mensagens =[]

  
    })



app.listen(5000,() =>{
    console.log('funcionando!')
})