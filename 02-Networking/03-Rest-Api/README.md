# Rest API => Representational State Trasfer API

- Frontend <{API}> Backend <{API}> Data Base

- All are communicate by each other by API itself.

Q. Why REST?
=> 
  1. Ease of use :-  in every situation if we required to communicate with server to server, or client to server or server to data   base in any any way it's too much easy.
  2. Stateless :-  We don't require to maintain any state. It's by default mainain by itself.
  3. Scalability :- We can improve scalability based on requirement, it will not create any problem. We can increase scalability vertical as well as horizontal.
  4. Flexibility in data :- we have right to decide my comunication can be in JSON format or XML format as well.
  5. Uniform Interfaces :- we can define anything inside it, our domain name or querry params or other. 
  6. Caching :- we can cash our request and other thing, network layer on client side.
  7. Separation of concers :- We can separate every thing example, we can make frontend in js and backend in java or any language. 
  8. Inter-operability :- Language Agnostic
  9. Testing is Ease :- 
  10. Security :- It's ease because of we are using http and there is too much concept which make good security.


# Building Block of Rest API

A) URL :->

https://www.example.com/forum/questions/?tag=networking&order#top
  |      |       |     |   |      |         |                  |
scheme subdomain |    TLD  SubDirectory    Querry parameter   framgment
                 |
                Domain

        
                
           Request                                                                   Response
----------------------------------------------------------------------------------------------------                                                                  

 1. HTTP Request line -> GET+http://127:0:34:5500/styles+HTTP/1.1    1. HTTP response line-> HTTP/1.1 200 OK
                         http method + URL + protocol                                             protocol + Status code

 2. HTTP Header                                                          2. HTTP respose Header

 3. HTTP Body -> It will always empty                                    3. Body is return from server


B) Header :-> There is two type of header in network Tab.(Request Header , Response Header)

  REQUEST HEADER --------------->

   1. Host -> Where we actally hit request. ex:-> 1.rome.api.flipkart.com
   2. Origin -> Main origin/domain. ex:-> https://www.flipkart.com
   3. referer -> Where to user come from on your web page. ex:-> https://www.youtube.com/ to flipkart
   4. User Agent -> to identify the client device where request coming to server. Ex:->  Mozilla/5.0 (X11;   Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36
   5. Accept -> Client define which type of response it will take. Ex:-  */* mean every type response it will accept. if application/json, text/plain the JSON or text plain file.
   6. Accept Language -> which laguage it will support
   7. accept-encoding -> gzip, deflate, br(brear, it's best), zstd
   8. Connection -> keep TCP connection open. (keep alive, close)
   9. Autherization -> Send credentials. Ex:- send credentials like (bearer token etc.)
   10. Cookies -> previous server token can be resend. (key = value) in encypted form.

  RESPONSE HEADER --------------->
   
   1. Date -> when response was generated.
   2. Server -> Provided server info. (Apache/Linux).
   3. Content-Type -> Types of response content. (txt/html/application/json).
   4. Content Length -> Originl body response length. (256 byte etc.)
   5. Set-Cookies -> Informs about cookie need to store for future response.
   6. Content -Encoding -> gzip/br
   7. Cache Control
   8. last modified
   9. Etag
   10. Expires


C) Status Code:->

   1XX ->  Information Related

          100 => Continue
          101 => Switching

   2XX -> Sucess 

     #    200 =>   OK 
          201 =>   Created (POST request)
          202 =>   Accepted (like any file or credential)
          204 =>   No Content
          207 =>   Partial Content

   3XX -> Rediraction of source(server)
   
     #    301 =>   Move Permanently
          302 =>   Temporary Move
          307 =>   302 retain method
          308 =>   307 retain method

   4XX -> Client Error 
   
     #    400 =>   Bad request (like credential wrong)
     #    401 =>   Unautherized (Unautherized user)
          403 =>   Autherization needed (like customer want to see admin pannel)
     #    404 =>   Not Found
          405 =>   Method not allowed
          429 =>   Concurrent request

   5XX -> Sucess 
   
    #     500 =>   Internal server error
    #     502 =>   Bad Gateway
    #     503 =>   Service unavailable
    #     504 =>   Gateway Timeout
          507 =>   Insufficient Storage