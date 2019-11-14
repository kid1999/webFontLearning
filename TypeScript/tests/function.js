"use strict";
// 朴素版本
// function testfunc(my_name:string):string{
//     return 'my name is ' + my_name;
// }
// var my_name:string = "kid1999"
// console.info(testfunc(my_name))
//1.有可选参数的函数
// function searchXiaoJieJie2(age:number,stature?:string):string{
//     let yy:string = ''
//     yy = '找到了'+age+'岁'
//     if(stature !=undefined){
//         yy = yy + stature
//     }
//     return yy+'的小姐姐'
// }
// var result:string  =  searchXiaoJieJie2(22,'大长腿')
// console.log(result)
// 2.有默认参数的函数
// function searchXiaoJieJie2(age:number=18,stature:string='大胸'):string
// 3.有剩余参数的函数
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = searchXiaoJieJie3('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
