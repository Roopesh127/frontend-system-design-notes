import express from "express";

const app = express();

const PORT = 5111;

app.all('/',(req,res)=>{
//   console.log(`request ->,  ${req}`);
//   console.log(`response ->, ${res}`);
console.log("req -> ", req);
console.log("res ->",res);
  res.send(`I'm up`)
})

app.listen(PORT,()=>{
    console.log(`server is listening at port :- ${PORT}`)
})