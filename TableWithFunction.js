// Q. Print Table For given Function Number  ?
// Output = 8 * 10 = 80


function table(number){
    for (var num = 1; num<=10; num++ ){
        var tableOf = number;
        if(!tableOf){
            console.log("Please Input a Number");
        }
        console.log(tableOf + " * " + num + " = " + tableOf*num );
    }
    
}
table(15)