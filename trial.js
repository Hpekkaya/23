
// itaration(döngüler)
const numbers = [45,5,6,55,77]

numbers.forEach(myFunction);
console.log(numbers)
function myFunction(value,index,array){
        numbers[index] *= 2
        console.log(index + "-" + value)
        // return value * 2 ;
    }

