// Write a program which iterates the integers from 1 to 50. 
// For multiples of three (3) print "Coca" instead of the number 
// and for the multiples of five (5) print "Cola". For numbers 
// which are multiples of both three (3) and five (5) print "CocaCola".

for(i = 1; i <= 50; ++i){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("CocaCola");
    }else if (i % 3 == 0){
        console.log("Coca");
    }else if (i % 5 == 0){
        console.log("Cola");
    }else{
        console.log(i);
    }
}


// Expected / Example Output:
//
// 1
// 2
// Coca
// 4
// Cola
// ...
// 14
// CocaCola
// ...
//
