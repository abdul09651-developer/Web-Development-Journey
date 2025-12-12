function nice(name)
{
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
    
}
nice("Rohan")
nice("Abdul")

function sum(a,b, c =3){
    //console.log(a + b)
    return a + b + c
}

result1 = sum(3,5)
result2 = sum(13,65)
result3 = sum(34,58,2)

console.log("The sum of a and b is ", result1);
console.log("The sum of a and b is ", result2);
console.log("The sum of a and b is ", result3);

const func1=(x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(67);
func1(93);

const funcmulti=(a,b)=>{
    let c = a*b
    console.log("The multiplication of a and b: ",c)
}

funcmulti(3,4)

const functable=(num)=>{
    for (let i = 1 ; i <11; i++){
        
       let multitable = num*i
       console.log(`${num} x ${i} = ${multitable}`)
    }
}

functable(2);
