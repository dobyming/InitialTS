//JS 문자열 선언
// var str = 'hello';

//TS 문자열 선언 (ES6+ .. let 또는 const로 지정하여 선언)
// let : 한번 선언한 변수는 다시 선언할 수 없다. 
// const : 한번 할당한 '값'을 변경할 수 없다. 
const str: string = 'hello';
let num: number = 10;

//TS 배열 
let arr: Array<number> = [1,2,3];
let sarr: Array<string> = ["hello","world"]; //string만 선언
let items: number[] = [1,2,3]

//TS 튜플 (각 index에 type을 지정)
let address: [string,number] = ['nike',1];

//TS 객체 
let obj: object = {};
// let person: object = {
//     name: 'dm',
//     age: 24
// };

//객체를 구체적으로 선언하는 방법 
let person: {name: string, age: number} = {
    name : 'dm',
    age : 24
};

//TS 진위값
let show: boolean = true;
