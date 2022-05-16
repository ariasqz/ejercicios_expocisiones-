//LA FUNCION GENERAL DE LAS MATEMATICAS EN JS ES MATH 
  
​var​ ​mivalorpi​ ​=​ ​Math​.​PI​; 
​var​ ​base​ ​=​ ​document​.​getElementById​(​'base'​)​.​value​; 
​var​ ​exponente​ ​=​ ​document​.​getElementById​(​'exponente'​)​.​value​; 
 
 
​//FUNCION PI 
​function​ ​pi​(​)​{ 
​    ​alert​(​"El valor de pi en JS es "​ ​+​ ​mivalorpi​)​; 
​} 
 
​//FUNCION REDONDEAR - round 
 
​function​ ​round​(​)​{ 
​    ​var​ ​redondear​ ​=​ ​Math​.​round​(​mivalorpi​)​; 
​    ​alert​(​"El valor redondeado sera: "​+​ ​redondear​)​; 
​} 
 
​//Funcion base a exponente = pow 
 
​function​ ​pow​(​)​{ 
 
​    ​var​ ​base​ ​=​ ​document​.​getElementById​(​'base'​)​.​value​; 
​    ​var​ ​exponente​ ​=​ ​document​.​getElementById​(​'exponente'​)​.​value​; 
​    ​var​ ​exponencial​ ​=​ ​Math​.​pow​(​base​,​exponente​)​; 
 
​    ​alert​(​"El total seria: "​+​ ​exponencial​)​; 
 
​} 
 
​//Funcion raiz = sqrt 
 
​function​ ​raiz​(​)​{ 
​    ​var​ ​numero​ ​=​ ​document​.​getElementById​(​'numero'​)​.​value​; 
​    ​var​ ​calcularaiz​ ​=​ ​Math​.​sqrt​(​numero​)​; 
​    ​alert​(​"La raiz seria: "​ ​+​ ​calcularaiz​)​; 
​}