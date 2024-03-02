/*let a = 10;
let b = 20;
let c = 30;
if((a>b)&&(a>c))
{
    console.log(a);
}
else if((b>a)&&(b>c))
{
    console.log(b);
}
else
    console.log(c);
*/
/*function isInvalid(year, month, day) {
    return (month === 2 && (day === 30 || day === 31));
}
console.log(isInvalid(2024, 2, 29));
console.log(isInvalid(2022, 2, 31));
console.log(isInvalid(2022, 3, 31));*/

/*let a =200;
let h = "hi";
let he = "hello";
a%3 ==0 ? consoleh:he;
if(a%3==0 && a%5==0)
console.log("Hihello");*/

/*function fun(a)
{
    return "Hey"+ " "+a;
}
console.log(fun("Velmurugan"));*/

/*let abc=()=>
{
    console.log("faksdjf");
}
//console.log(abc());

abc();*/

//Spread Operator
 /*const obj1 = {
     names: "abc",
     age: "12"
 }
 const obj2 = {
     address: "Coimbatore"
 }
 const obj3 = {...obj1, ...obj2};
 console.log(obj3);

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const ans = [...arr1, ...arr2];
console.log(ans);

//Rest operatpor

function yo(a,b,...numb)
{
    console.log(numb);
}
yo("hello",1,2,3,4);

//Task

function mult(...a)
{
    for(let i=1; i<2; i++)
    {
        a[i]= a[0]*a[i];
    }
    a[0]*=a[0];
    return a;
}
let ab = mult(2,3,4)
console.log(ab);

//Unpacking

let obj4 ={
    lk:"waseef",
    age:  18,
    date: 6
}
let {lk, age, date}=obj4;
console.log(lk);

let obj5 = {
    n:"Ruthresh",
    addr: {
        street : "barathiyar street",
        cit: "Tirupattur"
    },
    ge:23
}
let{...a} = obj5;
console.log(a);

function hi(a)
{
    return a;
}
let obj5 = {
    n:"Ruthresh",
    addr: {
        street : "barathiyar street",
        cit: "Tirupattur"
    },
    ge:23
}
let b = hi(obj5.ge);
console.log(b);


function func1(a,b,c,x)
{
    if(c == "add")
    {
        return x(a+b);
    }
    else if(c == "sub")
    {
        return x(a-b);
    }
}
function func2(ans)
{
    console.log(ans);
}

func1(1,2,"sub",func2);


function fun1(f,...a){
    let arr = [],j=0;
    for(i=0;i<a.length;i++)
    {
        if(a[i]%2==0)
        {
            arr[j] = a[i];j++;
        }
    }
    return f(arr);

}
function fun2(x){
    console.log(x);
}
fun1(fun2,1,2,3,4);*/

function fetchdata()
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const data = { message: "Data Fetched Successfully"};
            resolve(data);
        },2000);
    });
}
fetchdata()

    .then(data=>
        {
            console.log("Success:",data);
        })
    .catch(error=>{
        console.error("Error:",error);
    });
