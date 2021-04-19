// IIFE -> Immediately invoked function expression 

// Queremos fugir do escopo global pra evitar problemas 
// Logo apos a função invocar ela colocando dois parentesse 
// como era feito no JQuery

(function(){
    console.log('João Vitor Buarque')
})();

// dessa maneira estou protegido do escopo global podendo fazer 
// qualquer coisa ali dentro
