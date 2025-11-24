let array1 = [1, 5, 8, 2 , 3, 6, 2];



function mayor(array1) {


    let max = array1[0];

    for (let index = 0; index < array1.length; index++) {
        if (max < array1[index]){
            max = array1[index]
        }
        
    }

    return max;
}

alert ("el numero maximo es : " + mayor(array1))