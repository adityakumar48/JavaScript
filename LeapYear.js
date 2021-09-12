var checkYear = 2200;

if(checkYear % 4 === 0){
   if (checkYear % 100 === 0){
        if(checkYear % 400 === 0){
            console.log(checkYear + ' Is Leap Year ');
        }else{
            console.log(checkYear + ' Is Not a Leap Year ');
        }
   }else{
    console.log(checkYear + ' Is Leap Year ');
   }
}else{
    console.log(checkYear + ' Is Not a Leap Year');
}