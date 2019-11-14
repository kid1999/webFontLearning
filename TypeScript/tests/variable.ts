var age:number = 18
var height:number = 1.78

console.info(age);
console.info(height);
console.info("-----------------");

var my_name:string = "kid1999"
console.info(my_name);

var b:boolean = true
var c:boolean = false

enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。

enum REN1{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN1.yao)  //返回了妖 这个字

var t:any =10 
t = "jspang"
t = true
console.log(t)


// Undefined :
// Number:数值类型;
// string : 字符串类型;
// Boolean: 布尔类型；
// enum：枚举类型；
// any : 任意类型，一个牛X的类型；
// void：空类型；
// Array : 数组类型;
// Tuple : 元祖类型；
// Null ：空类型。