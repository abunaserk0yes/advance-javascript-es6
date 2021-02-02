array=[1,2,3-1,-2,-3-4,5,6];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    // console.log(element);

    if (element>4) {
        break;
    }

}

// Use continue function 

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // console.log(element);

    if (element<-1) {
        continue;
    }

}