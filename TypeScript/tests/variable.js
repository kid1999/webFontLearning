"use strict";
var age = 18;
var height = 1.78;
console.info(age);
console.info(height);
console.info("-----------------");
var my_name = "kid1999";
console.info(my_name);
var b = true;
var c = false;
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
console.log(REN.yao); //返回了2，这是索引index，跟数组很想。
var REN1;
(function (REN1) {
    REN1["nan"] = "\u7537";
    REN1["nv"] = "\u5973";
    REN1["yao"] = "\u5996";
})(REN1 || (REN1 = {}));
console.log(REN1.yao); //返回了妖 这个字
var t = 10;
t = "jspang";
t = true;
console.log(t);
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
