// basicamente são funcoes que se chamam 
// ela chama ela mesma a unica preocupação é saber quando ela para de se chamar 
// é como um while ou for eu acho 

function recursiva(max) {
    console.log(max);
    if (max >= 10 ) return;
    max++;
    recursiva(max); // ela se chama 
};

recursiva(0);