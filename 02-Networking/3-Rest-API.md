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

           Request                                                                               Response
       ---------------                                                                       -----------------    

 1. HTTP Request line -> GET + http://127:0:34:5500/styles + HTTP/1.1    1. HTTP response line -> HTTP/1.1 200 OK
                         http method + URL + protocol                                             protocol + Status code

 2. HTTP Header                                                          2. HTTP respose Header

 3. HTTP Body -> It will always empty                                    3. Body is return from server