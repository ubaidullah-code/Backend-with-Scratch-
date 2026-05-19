import http from "node:http";

const server = http.createServer((request, response)=>{
    const{ url ,method , headers}= request
    response.writeHead(200,{"content-type":"text/plain"})
    console.log({url,method,headers})
    response.end("Hello form nodejs server")
})
const PORT = 5000;
server.listen(PORT,()=> console.log(`server is running on this link http://localhost:${PORT}`))
 const data = [
  {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "age": 28,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "birthDate": "1996-12-25",
    "image": "https://dummyjson.com",
    "address": {
      "address": "1745 Tishomingo Dr",
      "city": "Louisville",
      "state": "Kentucky",
      "postalCode": "40216"
    },
    "company": {
      "name": "Tech Solutions",
      "department": "Engineering",
      "title": "Frontend Developer"
    }
  },
  {
    "id": 2,
    "firstName": "Priscilla",
    "lastName": "Mueller",
    "age": 35,
    "gender": "female",
    "email": "pmueller1@is.gd",
    "phone": "+1 248 555 0192",
    "username": "pmueller1",
    "birthDate": "1989-05-14",
    "image": "https://dummyjson.com",
    "address": {
      "address": "894 Saffold Rd",
      "city": "Detroit",
      "state": "Michigan",
      "postalCode": "48201"
    },
    "company": {
      "name": "Global Logistics",
      "department": "Sales",
      "title": "Account Manager"
    }
  }
 ]
const server = http.createServer((req,res)=>{
    const { url , method } = req;
    
    if(url == '/' && method == "GET" )
        {
            res.writeHead(200,{"content-type":'application/json'})
            res.end(JSON.stringify(data))
        }
    else if(url == '/about') 
        {
            res.end("About data transfer successfully")
        }
    else{
        res.statusCode = 404
        res.end("page not found");
        }   
})
server.listen(5000,()=>console.log("server is running"))

const serverPractise = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type": 'application/json'});
    if(req?.method == "POST" )
    {

        res.end(JSON.stringify(data))
    }
    else{
        res.end("method doesn't matched!")
    }
}).listen(5000)

